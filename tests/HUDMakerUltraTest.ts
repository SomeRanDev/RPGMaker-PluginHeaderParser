import { assertEquals } from "jsr:@std/assert@1.0.15";
import { parseHeaders } from "../Main.ts";
import type { BooleanPluginParam } from "../types/PluginParam.ts";

Deno.test("hud maker ultra", function () {
	assertEquals(parseHeaders(CODE), {
		"data": {
			"default": {
				"target": 1,
				"plugindesc":
					"Allows you to create and use HUDs for the map and battles.\nRequires the HUD Maker Ultra editor.",
				"author": "SRDude",
				"help":
					"============================================================================\nHUD Maker Ultra\nVersion 1.1.5\nSRDude\n============================================================================\n\nThis plugin allows developers to create their own map and battle HUD.\n\nThis plugin requires the HUD Maker Ultra software.\nYou can download it for free here:\nhttp://sumrndm.site/hud-maker-ultra\n\n============================================================================\nEnd of Help File\n============================================================================\n\nWelcome to the bottom of the Help file. Thanks for reading!\n\nhttps://www.youtube.com/SumRndmDde\nhttps://www.twitter.com/SumRndmDde\nhttp://sumrndm.site\n\nUntil next time,\n~ SRDude\n",
				"params": [{
					"name": "Auto-Reload HUD Data",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						"If ON, everytime the game window receives focus, the editor data will be reloaded. Only works during play-tests.",
					"default": "false",
				}, {
					"name": "Enable Screenshots",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						'If ON, pressing "CTRL + S" will take a screen-shot of the game without the HUD.',
					"default": "false",
				}, {
					"name": "Hide Battle Status Window",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						"If ON, the party's battle status window will be made invisible.",
					"on": "Hide",
					"off": "Show",
					"default": "false",
				} as BooleanPluginParam, {
					"name": "Hide Battle Selection Window",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						"If ON, the enemy/party selection window will be made invisible.",
					"on": "Hide",
					"off": "Show",
					"default": "false",
				} as BooleanPluginParam, {
					"name": "Fade During Events",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc": "If ON, the HUD will fade out during events.",
					"default": "true",
				}, {
					"name": "Event Fade Opacity",
					"meta": {},
					"type": { "type": 3, "arrayDepth": 0 },
					"desc": "The opacity of the HUD during event processing.",
					"default": "125",
				}, {
					"name": "Fade Duration",
					"meta": {},
					"type": { "type": 3, "arrayDepth": 0 },
					"desc":
						"The duration of the fade animation upon changing between visibility modes.",
					"default": "10",
				}, {
					"name": "Map Visibility Code",
					"meta": {},
					"type": { "type": 1, "arrayDepth": 0 },
					"desc":
						"Code that dictates the HUD's visibility on the map.",
					"default": "return true;",
				}, {
					"name": "Battle Visibility Code",
					"meta": {},
					"type": { "type": 1, "arrayDepth": 0 },
					"desc":
						"Code that dictates the HUD's visibility in battle.",
					"default": "return true;",
				}],
				"flatParams": [{
					"name": "Auto-Reload HUD Data",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						"If ON, everytime the game window receives focus, the editor data will be reloaded. Only works during play-tests.",
					"default": "false",
				}, {
					"name": "Enable Screenshots",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						'If ON, pressing "CTRL + S" will take a screen-shot of the game without the HUD.',
					"default": "false",
				}, {
					"name": "Hide Battle Status Window",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						"If ON, the party's battle status window will be made invisible.",
					"on": "Hide",
					"off": "Show",
					"default": "false",
				} as BooleanPluginParam, {
					"name": "Hide Battle Selection Window",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						"If ON, the enemy/party selection window will be made invisible.",
					"on": "Hide",
					"off": "Show",
					"default": "false",
				} as BooleanPluginParam, {
					"name": "Fade During Events",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc": "If ON, the HUD will fade out during events.",
					"default": "true",
				}, {
					"name": "Event Fade Opacity",
					"meta": {},
					"type": { "type": 3, "arrayDepth": 0 },
					"desc": "The opacity of the HUD during event processing.",
					"default": "125",
				}, {
					"name": "Fade Duration",
					"meta": {},
					"type": { "type": 3, "arrayDepth": 0 },
					"desc":
						"The duration of the fade animation upon changing between visibility modes.",
					"default": "10",
				}, {
					"name": "Map Visibility Code",
					"meta": {},
					"type": { "type": 1, "arrayDepth": 0 },
					"desc":
						"Code that dictates the HUD's visibility on the map.",
					"default": "return true;",
				}, {
					"name": "Battle Visibility Code",
					"meta": {},
					"type": { "type": 1, "arrayDepth": 0 },
					"desc":
						"Code that dictates the HUD's visibility in battle.",
					"default": "return true;",
				}],
				"commands": [{
					"command": "Set HUD Visibility",
					"args": [{
						"name": "Visible?",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Whether the HUD is set to visible or invisible.",
						"on": "Visible",
						"off": "Invisible",
						"default": "true",
					} as BooleanPluginParam],
					"meta": {},
					"text": "Set HUD Visibility",
					"desc": "Sets the HUD to visible or invisible.",
				}, {
					"command": "Set HUD Activity",
					"args": [{
						"name": "Active?",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc": "Whether the HUD is active.",
						"on": "Active",
						"off": "Inactive",
						"default": "true",
					} as BooleanPluginParam],
					"meta": {},
					"text": "Set HUD Activity",
					"desc": "Sets the HUD to be active or inactive.",
				}],
				"structs": [],
				"meta": {},
				"url": "http://sumrndm.site/hud-maker-ultra",
				"base": "SRD_UltraBase",
				"orderAfter": "SRD_UltraBase",
				"orderBefore": "SRD_HUDMakerUltraPro",
			},
		},
		"warnings": [],
		"remainingContent":
			"\n\nvar SRD = SRD || {};\nSRD.HUDMakerUltra = SRD.HUDMakerUltra || {};",
	});
});

const CODE = `/*:
 * @target MZ
 * @plugindesc Allows you to create and use HUDs for the map and battles.
 * Requires the HUD Maker Ultra editor.
 * @author SRDude
 * @url http://sumrndm.site/hud-maker-ultra
 * @base SRD_UltraBase
 * @orderAfter SRD_UltraBase
 * @orderBefore SRD_HUDMakerUltraPro
 *
 * @param Auto-Reload HUD Data
 * @desc If ON, everytime the game window receives focus, the editor data will be reloaded. Only works during play-tests.
 * @type boolean
 * @default false
 *
 * @param Enable Screenshots
 * @desc If ON, pressing "CTRL + S" will take a screen-shot of the game without the HUD.
 * @type boolean
 * @default false
 *
 * @param Hide Battle Status Window
 * @desc If ON, the party's battle status window will be made invisible.
 * @type boolean
 * @on Hide
 * @off Show
 * @default false
 *
 * @param Hide Battle Selection Window
 * @desc If ON, the enemy/party selection window will be made invisible.
 * @type boolean
 * @on Hide
 * @off Show
 * @default false
 *
 * @param Fade During Events
 * @desc If ON, the HUD will fade out during events.
 * @type boolean
 * @default true
 *
 * @param Event Fade Opacity
 * @desc The opacity of the HUD during event processing.
 * Select a number between 0 and 255.
 * @type number
 * @default 125
 *
 * @param Fade Duration
 * @desc The duration of the fade animation upon changing between visibility modes.
 * @type number
 * @default 10
 *
 * @param Map Visibility Code
 * @desc Code that dictates the HUD's visibility on the map.
 * Leave as "return true;" to not affect the HUD.
 * @type multiline_string
 * @default return true;
 *
 * @param Battle Visibility Code
 * @desc Code that dictates the HUD's visibility in battle.
 * Leave as "return true;" to not affect the HUD.
 * @type multiline_string
 * @default return true;
 *
 * @command Set HUD Visibility
 * @text Set HUD Visibility
 * @desc Sets the HUD to visible or invisible.
 *
 * @arg Visible?
 * @desc Whether the HUD is set to visible or invisible.
 * @type boolean
 * @on Visible
 * @off Invisible
 * @default true
 *
 * @command Set HUD Activity
 * @text Set HUD Activity
 * @desc Sets the HUD to be active or inactive.
 *
 * @arg Active?
 * @desc Whether the HUD is active.
 * @type boolean
 * @on Active
 * @off Inactive
 * @default true
 *
 * @help
 * ============================================================================
 *                                HUD Maker Ultra
 *                                 Version 1.1.5
 *                                    SRDude
 * ============================================================================
 *
 * This plugin allows developers to create their own map and battle HUD.
 *
 * This plugin requires the HUD Maker Ultra software.
 * You can download it for free here:
 * http://sumrndm.site/hud-maker-ultra
 *
 * ============================================================================
 *  End of Help File
 * ============================================================================
 *
 * Welcome to the bottom of the Help file. Thanks for reading!
 *
 * https://www.youtube.com/SumRndmDde
 * https://www.twitter.com/SumRndmDde
 * http://sumrndm.site
 *
 * Until next time,
 *   ~ SRDude
 */

var SRD = SRD || {};
SRD.HUDMakerUltra = SRD.HUDMakerUltra || {};`;
