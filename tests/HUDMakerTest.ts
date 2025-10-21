import { assertEquals } from "jsr:@std/assert@1.0.15";
import { parseHeaders } from "../Main.ts";
import type { PluginParamArrayType } from "../types/PluginParam.ts";

Deno.test("hud maker", function () {
	const content = `/*:
 * @plugindesc Allows developers to create their own map-based HUD through an in-game GUI window!
 * @author SumRndmDde
 *
 * @param HUD Configurations
 * @type text[]
 * @desc The list of extra HUD configurations that can be customized and toggled between using the plugin command.
 * @default []
 *
 * @param Active Updating
 * @desc If 'true', then HUD pieces will automatically update whenever properties are changed in the editor.
 * @default false
 *
 * @param Show During Events
 * @desc Sets what happens to the HUD during event processing.
 * Choices are:   hide    -    show    -    transparent
 * @type select
 * @option Hide
 * @value hide
 * @option Show
 * @value show
 * @option Transparent
 * @value transparent
 * @default transparent
 *
 * @param Map Global Condition
 * @desc This is a condition that must be true for the map HUD to be visible and active.
 * @default
 *
 * @param Battle Global Condition
 * @desc This is a condition that must be true for the battle HUD to be visible and active.
 * @default
 *
 * @param Disable Delete Key
 * @desc If 'true', the Delete key will no longer delete the currently highlighted piece.
 * @type boolean
 * @default true
 *
 * @help
 *
 * HUD Maker
 * Version 1.6
 * sumrnDmDde
 *
 *
 * This plugin allows developers to create their own map-based HUD through
 * an in-game GUI window!
 *
 *
 * ==============================================================================
 *  Image Installation
 * ==============================================================================
 *
 * All HUD images must be placed in:
 *
 *   /img/SumRndmDde/hud/
 *
 *
 * They need to be segmented into four folders:
 *  - pictures
 *  - numbers
 *  - gauge_images
 *  - gauge_backs
 *
 *
 * Each folder will be used to hold images for the corresponding pieces:
 *  - Picture
 *  - Image Numbers
 *  - Image Gauge
 *
 *
 * ==============================================================================
 *  HUD Configurations
 * ==============================================================================
 *
 * Separate configurations for the HUD can be setup.
 *
 * ==============================================================================
 *
 * The following notetags can be used in a map in order to force a switch
 * to said configuration upon map transition:
 *
 *     <Default HUD Configuration>
 *     <HUD Configuration: [config-name]>
 *
 * ==============================================================================
 *
 * In order to switch the configuration during an event, the following
 * plugin commands can be used:
 *
 *     SetDefaultHUDConfiguration
 *     SetHUDConfiguration [config-name]
 *
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
 *
 * Welcome to the bottom of the Help file.
 *
 *
 * Thanks for reading!
 * If you have questions, or if you enjoyed this Plugin, please check
 * out my YouTube channel!
 *
 * https://www.youtube.com/c/sumrnDmDde
 *
 *
 * Until next time,
 *   ~ sumrnDmDde
 *
 */

(function() {
})();

`;

	assertEquals(parseHeaders(content), {
		"data": {
			"default": {
				"target": 0,
				"plugindesc":
					"Allows developers to create their own map-based HUD through an in-game GUI window!",
				"author": "SumRndmDde",
				"help":
					"HUD Maker\nVersion 1.6\nsumrnDmDde\n\nThis plugin allows developers to create their own map-based HUD through\nan in-game GUI window!\n\n==============================================================================\nImage Installation\n==============================================================================\n\nAll HUD images must be placed in:\n\n/img/SumRndmDde/hud/\n\nThey need to be segmented into four folders:\n- pictures\n- numbers\n- gauge_images\n- gauge_backs\n\nEach folder will be used to hold images for the corresponding pieces:\n- Picture\n- Image Numbers\n- Image Gauge\n\n==============================================================================\nHUD Configurations\n==============================================================================\n\nSeparate configurations for the HUD can be setup.\n\n==============================================================================\n\nThe following notetags can be used in a map in order to force a switch\nto said configuration upon map transition:\n\n<Default HUD Configuration>\n<HUD Configuration: [config-name]>\n\n==============================================================================\n\nIn order to switch the configuration during an event, the following\nplugin commands can be used:\n\nSetDefaultHUDConfiguration\nSetHUDConfiguration [config-name]\n\n==============================================================================\nEnd of Help File\n==============================================================================\n\nWelcome to the bottom of the Help file.\n\nThanks for reading!\nIf you have questions, or if you enjoyed this Plugin, please check\nout my YouTube channel!\n\nhttps://www.youtube.com/c/sumrnDmDde\n\nUntil next time,\n~ sumrnDmDde\n",
				"params": [{
					"name": "HUD Configurations",
					"meta": {},
					"type": {
						"type": 21,
						"subtype": { "type": 0 },
					} as PluginParamArrayType,
					"desc":
						"The list of extra HUD configurations that can be customized and toggled between using the plugin command.",
					"default": "[]",
				}, {
					"name": "Active Updating",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"If 'true', then HUD pieces will automatically update whenever properties are changed in the editor.",
					"default": "false",
				}, {
					"name": "Show During Events",
					"meta": {},
					"type": { "type": 5 },
					"desc":
						"Sets what happens to the HUD during event processing.",
					"options": [{ "option": "Hide", "value": "hide" }, {
						"option": "Show",
						"value": "show",
					}, { "option": "Transparent", "value": "transparent" }],
					"default": "transparent",
				}, {
					"name": "Map Global Condition",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"This is a condition that must be true for the map HUD to be visible and active.",
					"default": "",
				}, {
					"name": "Battle Global Condition",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"This is a condition that must be true for the battle HUD to be visible and active.",
					"default": "",
				}, {
					"name": "Disable Delete Key",
					"meta": {},
					"type": { "type": 4 },
					"desc":
						"If 'true', the Delete key will no longer delete the currently highlighted piece.",
					"default": "true",
				}],
				"flatParams": [{
					"name": "HUD Configurations",
					"meta": {},
					"type": {
						"type": 21,
						"subtype": { "type": 0 },
					} as PluginParamArrayType,
					"desc":
						"The list of extra HUD configurations that can be customized and toggled between using the plugin command.",
					"default": "[]",
				}, {
					"name": "Active Updating",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"If 'true', then HUD pieces will automatically update whenever properties are changed in the editor.",
					"default": "false",
				}, {
					"name": "Show During Events",
					"meta": {},
					"type": { "type": 5 },
					"desc":
						"Sets what happens to the HUD during event processing.",
					"options": [{ "option": "Hide", "value": "hide" }, {
						"option": "Show",
						"value": "show",
					}, { "option": "Transparent", "value": "transparent" }],
					"default": "transparent",
				}, {
					"name": "Map Global Condition",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"This is a condition that must be true for the map HUD to be visible and active.",
					"default": "",
				}, {
					"name": "Battle Global Condition",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"This is a condition that must be true for the battle HUD to be visible and active.",
					"default": "",
				}, {
					"name": "Disable Delete Key",
					"meta": {},
					"type": { "type": 4 },
					"desc":
						"If 'true', the Delete key will no longer delete the currently highlighted piece.",
					"default": "true",
				}],
				"commands": [],
				"structs": [],
				"meta": {},
			},
		},
		"warnings": [],
	});
});
