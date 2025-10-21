import { assertEquals } from "jsr:@std/assert@1.0.15";
import { parseHeaders, PluginTarget } from "../Main.ts";

Deno.test("basic parse", function () {
	const content = `
/*:
 * @plugindesc Hi
 * @author SomeRanDev
 * @help
 * Blablabla
 *
 * 123 321
 */

(function() {
	alert("Hello!");
})();
`;

	assertEquals(parseHeaders(content), {
		data: {
			default: {
				target: PluginTarget.MV,
				plugindesc: "Hi",
				author: "SomeRanDev",
				help: "Blablabla\n\n123 321\n",
				params: [],
				flatParams: [],
				commands: [],
				structs: [],
				meta: {},
			},
		},
		warnings: [],
	});
});

Deno.test("basic parse below code", function () {
	const content = `
(function() {
	alert("Hello!");
})();

/*:
 * @plugindesc Hi
 * @author SomeRanDev
 * @help
 * Blablabla
 *
 * 123 321
 */
`;

	assertEquals(parseHeaders(content), {
		data: {
			default: {
				target: PluginTarget.MV,
				plugindesc: "Hi",
				author: "SomeRanDev",
				help: "Blablabla\n\n123 321\n",
				params: [],
				flatParams: [],
				commands: [],
				structs: [],
				meta: {},
			},
		},
		warnings: [],
	});
});

Deno.test("basic parse mz", function () {
	const content = `
/*:
 * @target mz
 * @plugindesc Hi
 * How are ya?
 * @author SomeRanDev
 * @help
 * This is a help section.
 */

(function() {
	alert("Hello!");
})();
`;

	assertEquals(parseHeaders(content), {
		data: {
			default: {
				target: PluginTarget.MZ,
				plugindesc: "Hi\nHow are ya?",
				author: "SomeRanDev",
				help: "This is a help section.\n",
				params: [],
				flatParams: [],
				commands: [],
				structs: [],
				meta: {},
			},
		},
		warnings: [],
	});
});
