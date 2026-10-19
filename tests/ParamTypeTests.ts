import { assertEquals } from "jsr:@std/assert@1.0.15";
import {
	PluginParamInnerType,
	type PluginParamStructType,
	stringToParamType,
} from "../types/PluginParam.ts";

Deno.test("param type", function () {
	assertEquals(stringToParamType("number"), {
		type: PluginParamInnerType.Number,
		arrayDepth: 0,
	});
});

Deno.test("param type array", function () {
	assertEquals(stringToParamType("number[][]"), {
		type: PluginParamInnerType.Number,
		arrayDepth: 2,
	});
});

Deno.test("param type struct", function () {
	assertEquals(stringToParamType("struct<Foo>"), {
		type: PluginParamInnerType.Struct,
		structName: "Foo",
		arrayDepth: 0,
	} as PluginParamStructType);
});

Deno.test("param type struct array", function () {
	assertEquals(stringToParamType("struct<Foo>[]"), {
		type: PluginParamInnerType.Struct,
		structName: "Foo",
		arrayDepth: 1,
	} as PluginParamStructType);
});
