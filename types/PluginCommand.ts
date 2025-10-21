import type { PluginParam } from "./PluginParam.ts";

export interface PluginCommand {
	command: string;
	text?: string;
	desc?: string;
	meta?: Record<string, string | undefined>;
	args: PluginParam[];
}
