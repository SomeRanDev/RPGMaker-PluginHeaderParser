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
	Array,
	Struct,
}

export interface PluginParamType {
	type: PluginParamInnerType;
}

export interface PluginParamArrayType extends PluginParamType {
	type: PluginParamInnerType.Array;
	subtype: PluginParamType;
}

export interface PluginParamStructType extends PluginParamType {
	type: PluginParamInnerType.Struct;
	structName: string;
}

export function stringToParamType(name: string): PluginParamType {
	name = name.trim();
	if (name.endsWith("[]")) {
		const type = stringToParamType(name.substring(0, name.length - 3));
		return {
			type: PluginParamInnerType.Array,
			subtype: type,
		} as PluginParamArrayType;
	} else if (name.startsWith("struct<")) {
		return {
			type: PluginParamInnerType.Struct,
			structName: name.substring("struct<".length, name.length - 2),
		} as PluginParamStructType;
	}

	switch (name.toLowerCase()) {
		case "string":
			return { type: PluginParamInnerType.String };
		case "multiline_string":
			return { type: PluginParamInnerType.MultilineString };
		case "file":
			return { type: PluginParamInnerType.File };
		case "number":
			return { type: PluginParamInnerType.Number };
		case "boolean":
			return { type: PluginParamInnerType.Boolean };
		case "select":
			return { type: PluginParamInnerType.Select };
		case "combo":
			return { type: PluginParamInnerType.Combo };
		case "actor":
			return { type: PluginParamInnerType.Actor };
		case "class":
			return { type: PluginParamInnerType.Class };
		case "skill":
			return { type: PluginParamInnerType.Skill };
		case "item":
			return { type: PluginParamInnerType.Item };
		case "weapon":
			return { type: PluginParamInnerType.Weapon };
		case "armor":
			return { type: PluginParamInnerType.Armor };
		case "enemy":
			return { type: PluginParamInnerType.Enemy };
		case "troop":
			return { type: PluginParamInnerType.Troop };
		case "state":
			return { type: PluginParamInnerType.State };
		case "animation":
			return { type: PluginParamInnerType.Animation };
		case "tileset":
			return { type: PluginParamInnerType.Tileset };
		case "common_event":
			return { type: PluginParamInnerType.CommonEvent };
		case "switch":
			return { type: PluginParamInnerType.Switch };
		case "variable":
			return { type: PluginParamInnerType.Variable };
	}
	return { type: PluginParamInnerType.String };
}

export interface PluginParam {
	name: string;
	type: PluginParamType;
	default?: string;
	desc?: string;
	options?: { option: string; value: string }[];
	parent?: string;
	children?: PluginParam[];
	meta?: Record<string, string | undefined>;
}

export interface StringPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.String };
}

export interface MultilineStringPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.MultilineString };
}

export interface FilePluginParam extends PluginParam {
	type: { type: PluginParamInnerType.File };
	dir: string;
}

export function isFilePluginParam(
	param: PluginParam | null | undefined,
): param is FilePluginParam {
	return param?.type.type === PluginParamInnerType.File;
}

export interface NumberPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Number };
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
	type: { type: PluginParamInnerType.Boolean };
	on: string;
	off: string;
}

export function isBooleanPluginParam(
	param: PluginParam | null | undefined,
): param is BooleanPluginParam {
	return param?.type.type === PluginParamInnerType.Boolean;
}

export interface SelectPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Select };
}

export interface ComboPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Combo };
}

export interface ActorPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Actor };
}

export interface ClassPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Class };
}

export interface SkillPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Skill };
}

export interface ItemPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Item };
}

export interface WeaponPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Weapon };
}

export interface ArmorPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Armor };
}

export interface EnemyPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Enemy };
}

export interface TroopPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Troop };
}

export interface StatePluginParam extends PluginParam {
	type: { type: PluginParamInnerType.State };
}

export interface AnimationPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Animation };
}

export interface TilesetPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Tileset };
}

export interface CommonEventPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.CommonEvent };
}

export interface SwitchPluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Switch };
}

export interface VariablePluginParam extends PluginParam {
	type: { type: PluginParamInnerType.Variable };
}

export interface ArrayPluginParam extends PluginParam {
	type: PluginParamArrayType;
}

export interface StructPluginParam extends PluginParam {
	type: PluginParamStructType;
}
