/**
 * == RPG Maker Plugin Header Parser ==
 * Parses the header comment for an RPG Maker MV/MZ plugin.
 * By Maybee Rezbit (SomeRanDev)
 *
 * This can be used as a tool on the command-line using Deno:
 * ```
 * deno run start <input_plugin_file.js> <output_json_file.json>
 * ```
 *
 * OR, this can be imported into a Deno project:
 * ```js
 * import { parseHeader } from "https://raw.githubusercontent.com/SomeRanDev/RPGMaker-PluginHeaderParser/refs/heads/main/Main.ts";
 * const headerData = parseHeaders(Deno.readTextFileSync("MY_PLUGIN.js")); // or parseHeadersFromFile("MY_PLUGIN.js")
 * ```
 */

import {
	isBooleanPluginParam,
	isFilePluginParam,
	isNumberPluginParam,
	type PluginParam,
	PluginParamInnerType,
	stringToParamType,
} from "./types/PluginParam.ts";
import type { PluginCommand } from "./types/PluginCommand.ts";
import type { PluginStruct } from "./types/PluginStruct.ts";

/**
 * The target of the plugin. By default it's MV, but can be MZ if `@target mz` is parsed.
 */
export enum PluginTarget {
	MV,
	MZ,
}

/**
 * All of the data from an RPG Maker MV/MZ plugin.
 */
export interface PluginData {
	target: PluginTarget;
	plugindesc: string;
	author: string;
	help: string;
	url?: string;
	base?: string;
	orderBefore?: string;
	orderAfter?: string;
	params: PluginParam[];
	flatParams: PluginParam[];
	commands: PluginCommand[];
	structs: PluginStruct[];
	meta?: Record<string, string | undefined>;
}

/**
 * The result provided by `parseHeaders` and `parseHeadersFromFile`.
 *
 * `data` is the parsed `PluginData`.
 * `warnings` is a list of messages listing issues with the parse.
 */
export interface ParseHeadersResult {
	data: Record<string, PluginData>;
	warnings: string[];
}

/**
 * Parses the header data from an RPG Maker MV/MZ plugin's code.
 */
export function parseHeaders(
	code: string,
): ParseHeadersResult | null {
	// Parse header
	const headerBlocks = extractBlocks(code);
	if (!headerBlocks) {
		return null;
	}

	const data: Record<string, PluginData> = {};
	const totalWarnings: string[] = [];

	// Parse header blocks
	for (const headerBlock of headerBlocks) {
		const { data: headerData, warnings } = parseHeaderBlock(
			headerBlock.content,
		);
		data[headerBlock.language] = headerData;
		for (const w of warnings) totalWarnings.push(w);
	}

	// Parse struct blocks
	const structBlocks = extractStructBlocks(code);
	for (const s of structBlocks) {
		const struct = parseStructBlock(s.name, s.body, totalWarnings);
		if (data[s.language]) {
			data[s.language].structs.push(struct);
		}
	}

	return { data, warnings: totalWarnings };
}

/**
 * Returns the result of `parseHeaders` from the contents of a file.
 */
export async function parseHeadersFromFile(
	file: string,
): Promise<ParseHeadersResult | null> {
	const text = await Deno.readTextFile(file);
	return parseHeaders(text);
}

/**
 * Strip star from the start of the line if it exists.
 */
function normalizeLine(line: string) {
	return line.replace(/^\s*\*?\s*/, "");
}

/**
 * Match @tag [value]
 */
function parseTagLine(line: string): { tag: string; value: string } | null {
	const m = line.match(/^@([A-Za-z0-9_:-]+)\s*(.*)$/);
	if (!m) return null;
	return { tag: m[1], value: m[2].trim() };
}

/**
 * Extracts all the main headers and their language codes.
 */
function extractBlocks(
	text: string,
): { language: string; content: string }[] | null {
	const result: { language: string; content: string }[] = [];
	const re = /\/\*:(\w+)?\s*([\s\S]*?)\*\//g;
	let m: RegExpExecArray | null = null;
	while ((m = re.exec(text)) !== null) {
		result.push({ language: m.at(1) ?? "default", content: m.at(2) ?? "" });
	}
	return result;
}

/**
 * Extract the struct declaration.
 */
function extractStructBlocks(
	text: string,
): { name: string; language: string; body: string }[] {
	const result: { name: string; language: string; body: string }[] = [];
	const re = /\/\*~struct~([A-Za-z0-9_]+):(\w+)?([\s\S]*?)\*\//g;
	let m: RegExpExecArray | null = null;
	while ((m = re.exec(text)) !== null) {
		const name = m.at(1) ?? null;
		if (name === null) continue;
		result.push({
			name,
			language: m.at(2) ?? "default",
			body: m.at(3) ?? "",
		});
	}
	return result;
}

/**
 * Used within `parseHeaderBlock` and `parseTag` to track what type of collection is being parsed.
 */
enum ParsingCategory {
	None,
	PluginOrCommandArgument,
	Command,
	Option,
}

/**
 * Parses a header block containing plugin data, parameters, and commands.
 */
function parseHeaderBlock(block: string): {
	data: PluginData;
	warnings: string[];
} {
	const lines = block.split(/\r?\n/).map(normalizeLine);

	const result: PluginData = {
		target: PluginTarget.MV,
		plugindesc: "",
		author: "",
		help: "",
		params: [],
		flatParams: [],
		commands: [],
		structs: [],
		meta: {},
	};

	const warnings: string[] = [];

	let currentParam: PluginParam | null = null;
	let currentCommand: PluginCommand | null = null;
	let currentOption: { option: string; value: string } | null = null;
	let parsingHelp = false;

	for (let i = 0; i < lines.length; i++) {
		const raw = lines[i];

		if (parsingHelp) {
			if (result.help.length > 0) result.help += "\n";
			result.help += raw;
			continue;
		}

		const parsed = parseTagLine(raw);
		if (!parsed) continue;

		const tag = parsed.tag;
		const value = parsed.value;

		if (tag === "plugindesc") {
			result.plugindesc = value;
			currentParam = null;
			currentCommand = null;
			continue;
		}
		if (tag === "target") {
			result.target = value.toLowerCase() === "mz"
				? PluginTarget.MZ
				: PluginTarget.MV;
			continue;
		}
		if (tag === "author") {
			result.author = value;
			continue;
		}
		if (tag === "url") {
			result.url = value;
			continue;
		}
		if (tag === "help") {
			parsingHelp = true;
			currentParam = null;
			currentCommand = null;
			continue;
		}

		if (tag === "param") {
			currentParam = {
				name: value,
				meta: {},
				type: { type: PluginParamInnerType.String },
			};
			result.flatParams.push(currentParam);
			result.params.push(currentParam);

			currentCommand = null;
			continue;
		}

		if (tag === "command") {
			currentCommand = {
				command: value,
				args: [],
				meta: {},
			};
			result.commands.push(currentCommand);
			currentParam = null;
			continue;
		}

		if (tag === "arg") {
			if (!currentCommand) {
				warnings.push(`@arg found outside @command at line ${i + 1}`);
				currentCommand = { command: "__unknown__", args: [], meta: {} };
				result.commands.push(currentCommand);
			}
			currentParam = {
				name: value,
				meta: {},
				type: { type: PluginParamInnerType.String },
			};
			currentCommand.args.push(currentParam);
			continue;
		}

		if (tag === "option" && currentParam) {
			currentOption = { option: value, value: "" };
			if (currentParam) {
				currentParam.options ??= [];
				currentParam.options.push(currentOption);
			}
		}

		let target = ParsingCategory.None;
		if (currentOption) {
			target = ParsingCategory.Option;
		} else if (currentParam) {
			target = ParsingCategory.PluginOrCommandArgument;
		} else if (currentCommand) {
			target = ParsingCategory.Command;
		}

		const success = parseTag(
			tag,
			value,
			target,
			currentParam,
			currentCommand,
			currentOption,
		);

		if (!success) {
			warnings.push("Unexpected @" + tag);
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				currentParam
			) {
				currentParam.meta ??= {};
				currentParam.meta[tag] = value;
			} else if (target === ParsingCategory.Command && currentCommand) {
				currentCommand.meta ??= {};
				currentCommand.meta[tag] = value;
			} else {
				result.meta ??= {};
				result.meta[tag] = value;
			}
		}
	}

	// Process the HELP content like RPG Maker does.
	if (result.help) {
		result.help = result.help
			.replace(/\r/g, "")
			.replace(/\n{2,}/g, "\n\n")
			.trim() + "\n";
	}

	parentifyParameters(result);

	return { data: result, warnings };
}

/**
 * Assigns children parameters to their parents' `children` array.
 */
function parentifyParameters(result: PluginData) {
	const nameToParam = new Map<string, PluginParam[]>();
	for (const param of result.flatParams) {
		let list = nameToParam.get(param.name);
		if (list === undefined) {
			list = [];
			nameToParam.set(param.name, list);
		}
		list.push(param);
	}

	const unparentedParams: PluginParam[] = [];

	for (const param of result.flatParams) {
		if (!param.parent) {
			unparentedParams.push(param);
			continue;
		}

		const parent = nameToParam.get(param.parent)?.at(0);
		if (parent) {
			let children = parent.children;
			if (!children) {
				children = [];
				parent.children = children;
			}
			children.push(param);
		} else {
			unparentedParams.push(param);
		}
	}

	result.params = unparentedParams;
}

/**
 * Processes a "tag" from a comment given its `tag` and `value`.
 */
function parseTag(
	tag: string,
	value: string,
	target: ParsingCategory,
	currentParam: PluginParam | null = null,
	currentCommand: PluginCommand | null = null,
	currentOption: { option: string; value: string } | null,
): boolean {
	let success = false;
	switch (tag) {
		case "type": {
			const type = stringToParamType(value);
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				currentParam
			) {
				currentParam.type = type;
				success = true;
			}
			break;
		}
		case "default": {
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				currentParam
			) {
				currentParam.default = value;
				success = true;
			}
			break;
		}
		case "desc": {
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				currentParam
			) {
				currentParam.desc = value;
				success = true;
			} else if (target === ParsingCategory.Command && currentCommand) {
				currentCommand.desc = value;
				success = true;
			}
			break;
		}
		case "text": {
			if (target === ParsingCategory.Command && currentCommand) {
				currentCommand.text = value;
				success = true;
			}
			break;
		}
		case "value": {
			if (target === ParsingCategory.Option && currentOption) {
				currentOption.value = value;
				success = true;
			}
			break;
		}
		case "dir": {
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				isFilePluginParam(currentParam)
			) {
				currentParam.dir = value;
				success = true;
			}
			break;
		}
		case "min": {
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				isNumberPluginParam(currentParam)
			) {
				currentParam.min = parseInt(value) || 0;
				success = true;
			}
			break;
		}
		case "max": {
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				isNumberPluginParam(currentParam)
			) {
				currentParam.max = parseInt(value) || Number.MAX_SAFE_INTEGER;
				success = true;
			}
			break;
		}
		case "decimals": {
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				isNumberPluginParam(currentParam)
			) {
				currentParam.decimals = parseInt(value) ||
					Number.MAX_SAFE_INTEGER;
				success = true;
			}
			break;
		}
		case "on": {
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				isBooleanPluginParam(currentParam)
			) {
				currentParam.on = value;
				success = true;
			}
			break;
		}
		case "off": {
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				isBooleanPluginParam(currentParam)
			) {
				currentParam.off = value;
				success = true;
			}
			break;
		}
		case "parent": {
			if (
				target === ParsingCategory.PluginOrCommandArgument &&
				currentParam
			) {
				currentParam.parent = value;
				success = true;
			}
			break;
		}
	}

	return success;
}

/**
 * Parses a struct block.
 */
function parseStructBlock(
	name: string,
	body: string,
	warnings: string[],
): PluginStruct {
	const struct: PluginStruct = { name, params: [] };
	const lines = body.split(/\r?\n/).map(normalizeLine);

	let currentParam: PluginParam | null = null;
	for (const raw of lines) {
		const parsed = parseTagLine(raw);
		if (!parsed) continue;
		const tag = parsed.tag;
		const value = parsed.value;

		if (tag === "param") {
			currentParam = {
				name: value,
				meta: {},
				type: { type: PluginParamInnerType.String },
			};
			struct.params.push(currentParam);
		}

		const success = parseTag(
			tag,
			value,
			ParsingCategory.PluginOrCommandArgument,
			currentParam,
			null,
			null,
		);

		if (!success) {
			warnings.push("Unexpected @" + tag);
			if (currentParam) {
				currentParam.meta ??= {};
				currentParam.meta[tag] = value;
			}
		}
	}

	return struct;
}

/**
 * Returns the arguments if they are valid.
 * Crashes the program with a help error otherwise.
 */
function getArgs(): [string, string | null] {
	const pluginPath = Deno.args.at(0);
	const jsonOutputPath = Deno.args.at(1) ?? null;
	if (!pluginPath) {
		console.error(
			"Expected an argument for the input plugin file.\ndeno run Main.ts <plugin.js> [output_json_file.json]",
		);
		Deno.exit(1);
	}
	return [pluginPath, jsonOutputPath];
}

/**
 * Main function.
 */
async function main() {
	try {
		const [inputPlugin, outputJson] = getArgs();
		const result = await parseHeadersFromFile(inputPlugin);
		if (!result) return;

		const { data, warnings } = result;
		if (outputJson) {
			const output = JSON.stringify(data, null, 4);
			await Deno.writeTextFile(outputJson, output);
		}

		if (warnings.length) {
			console.error(`Warnings:\n${warnings.join("\n")}`);
		}
	} catch (err) {
		console.error("Error: ", err);
		Deno.exit(1);
	}
}

if (import.meta.main) {
	main();
}
