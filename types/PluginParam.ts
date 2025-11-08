export enum PluginParamInnerType {
	String,
	MultilineString,
	File,
	Number,
	Boolean,
	Select,
	Combo,
	Actor,
	Class,
	Skill,
	Item,
	Weapon,
	Armor,
	Enemy,
	Troop,
	State,
	Animation,
	Tileset,
	CommonEvent,
	Switch,
	Variable,
	Struct,
}

export interface PluginParamType {
	type: PluginParamInnerType;
	arrayDepth: number;
}

export interface PluginParamStructType extends PluginParamType {
	type: PluginParamInnerType.Struct;
	structName: string;
}

export function stringToParamType(name: string): PluginParamType {
	name = name.trim();
	if (name.endsWith("[]")) {
		const type = stringToParamType(name.substring(0, name.length - 2));
		type.arrayDepth++;
		return type;
	} else if (name.startsWith("struct<")) {
		return {
			type: PluginParamInnerType.Struct,
			structName: name.substring("struct<".length, name.length - 1),
		} as PluginParamStructType;
	}

	function makeType(inner: PluginParamInnerType) {
		return { type: inner, arrayDepth: 0 };
	}

	switch (name.toLowerCase()) {
		case "string":
			return makeType(PluginParamInnerType.String);
		case "multiline_string":
			return makeType(PluginParamInnerType.MultilineString);
		case "file":
			return makeType(PluginParamInnerType.File);
		case "number":
			return makeType(PluginParamInnerType.Number);
		case "boolean":
			return makeType(PluginParamInnerType.Boolean);
		case "select":
			return makeType(PluginParamInnerType.Select);
		case "combo":
			return makeType(PluginParamInnerType.Combo);
		case "actor":
			return makeType(PluginParamInnerType.Actor);
		case "class":
			return makeType(PluginParamInnerType.Class);
		case "skill":
			return makeType(PluginParamInnerType.Skill);
		case "item":
			return makeType(PluginParamInnerType.Item);
		case "weapon":
			return makeType(PluginParamInnerType.Weapon);
		case "armor":
			return makeType(PluginParamInnerType.Armor);
		case "enemy":
			return makeType(PluginParamInnerType.Enemy);
		case "troop":
			return makeType(PluginParamInnerType.Troop);
		case "state":
			return makeType(PluginParamInnerType.State);
		case "animation":
			return makeType(PluginParamInnerType.Animation);
		case "tileset":
			return makeType(PluginParamInnerType.Tileset);
		case "common_event":
			return makeType(PluginParamInnerType.CommonEvent);
		case "switch":
			return makeType(PluginParamInnerType.Switch);
		case "variable":
			return makeType(PluginParamInnerType.Variable);
	}
	return makeType(PluginParamInnerType.String);
}

export interface PluginParam {
	name: string;
	type: PluginParamType;
	text?: string;
	default?: string;
	desc?: string;
	options?: { option: string; value: string }[];
	parent?: string;
	children?: PluginParam[];
	meta?: Record<string, string | undefined>;
}

export interface StringPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.String; arrayDepth: number };
}

export interface MultilineStringPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.MultilineString; arrayDepth: number };
}

export interface FilePluginParam extends PluginParam {
	type: { type: PluginParamInnerType.File; arrayDepth: number };
	dir: string;
}

export function isFilePluginParam(
	param: PluginParam | null | undefined,
): param is FilePluginParam {
	return param?.type.type === PluginParamInnerType.File;
}

export interface NumberPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Number; arrayDepth: number };
	min: number;
	max: number;
	decimals: number;
}

export function isNumberPluginParam(
	param: PluginParam | null | undefined,
): param is NumberPluginParam {
	return param?.type.type === PluginParamInnerType.Number;
}

export interface BooleanPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Boolean; arrayDepth: number };
	on: string;
	off: string;
}

export function isBooleanPluginParam(
	param: PluginParam | null | undefined,
): param is BooleanPluginParam {
	return param?.type.type === PluginParamInnerType.Boolean;
}

export interface SelectPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Select; arrayDepth: number };
}

export interface ComboPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Combo; arrayDepth: number };
}

export interface ActorPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Actor; arrayDepth: number };
}

export interface ClassPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Class; arrayDepth: number };
}

export interface SkillPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Skill; arrayDepth: number };
}

export interface ItemPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Item; arrayDepth: number };
}

export interface WeaponPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Weapon; arrayDepth: number };
}

export interface ArmorPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Armor; arrayDepth: number };
}

export interface EnemyPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Enemy; arrayDepth: number };
}

export interface TroopPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Troop; arrayDepth: number };
}

export interface StatePluginParam extends PluginParam {
	type: { type: PluginParamInnerType.State; arrayDepth: number };
}

export interface AnimationPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Animation; arrayDepth: number };
}

export interface TilesetPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Tileset; arrayDepth: number };
}

export interface CommonEventPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.CommonEvent; arrayDepth: number };
}

export interface SwitchPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Switch; arrayDepth: number };
}

export interface VariablePluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Variable; arrayDepth: number };
}

export interface StructPluginParam extends PluginParam {
	type: PluginParamStructType;
}
