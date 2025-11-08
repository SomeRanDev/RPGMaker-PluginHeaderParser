import { assertEquals } from "jsr:@std/assert@1.0.15";
import { parseHeaders } from "../Main.ts";
import type {
	FilePluginParam,
	NumberPluginParam,
} from "../types/PluginParam.ts";

Deno.test("game upgrade", function () {
	assertEquals(parseHeaders(CODE), {
		"data": {
			"default": {
				"target": 0,
				"plugindesc":
					"Enables more customization over the core mechanics of one's game while also providing additional functions for future plugins.",
				"author": "SumRndmDde",
				"help":
					"Game Upgrade\nVersion 1.33\nSumRndmDde\n\nThis plugin enables more customization over the core mechanics of one's game\nwhile also providing additional functions for future plugins.\n\nIt also provides various inputs for manipulating the core NodeJS\nproperties setup within one's game.\n\n==============================================================================\nBasic Idea Behind the Plugin\n==============================================================================\n\nThis plugin has complete access to manipulation over various properties\nof your game window. Normally, such an ability would be impossible; however,\nthis game rebuilds the game from scratch upon initialization, allowing for\ncontrol over such things as maximum and minimum resizing along with the\nability to disable resizing capabilities altogether.\n\nThe frame of the game window may also be disabled, and the game now has the\nability to force the game window to always be on top. Experiement to your\nown desire! ~\n\n==============================================================================\nGame Window Plugin Commands\n==============================================================================\n\nThe following plugin commands may be used to manipulate the game window:\n\nForceClose\n\nCloses the game window.\n\nFocusWindow\n\nFocuses on the game window.\n\nMinimizeWindow\n\nMinimizes the game window.\n\nUnminimizeWindow\n\nUnminimizes the game window.\n\nMaximizeWindow\n\nMaximizes the game window.\n\nUnmaximizeWindow\n\nUnmaximize the game window.\n\nRequestAttention\n\nRequests attention to the game window.\n\nTaskBarShow\n\nMakes the game accessable from the task bar.\n\nTaskBarHide\n\nRemoves the game from the task bar.\n\nEnterKioskMode\n\nEnters kiosk mode.\n\nLeaveKioskMode\n\nLeaves kiosk mode.\n\nSetProgressBar ratio\n\nSets the window's progress bar to the value defined by \"ratio\".\n\n==============================================================================\nEnd of Help File\n==============================================================================\n\nWelcome to the bottom of the Help file.\n\nThanks for reading!\nIf you have questions, or if you enjoyed this Plugin, please check\nout my YouTube channel!\n\nhttps://www.youtube.com/c/SumRndmDde\n\nUntil next time,\n~ SumRndmDde\n",
				"params": [{
					"name": "Game Window",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"default": "====================================",
					"children": [{
						"name": "Game Reconstruction (1.5.X & below)",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							'If using MV 1.5.X or below, this is required for all "Game Window" parameters. For MV 1.6.0+, it does nothing.',
						"default": "true",
						"parent": "Game Window",
					}, {
						"name": "Game Resolution",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc": "The resolution of the game.",
						"default": '{"Width":"816","Height":"624"}',
						"parent": "Game Window",
					}, {
						"name": "Screen Resolution",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc": "The resolution of the screen.",
						"default": '{"Width":"","Height":""}',
						"parent": "Game Window",
					}, {
						"name": "Minimum Resolution",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc":
							"The minimum resolution the screen is allowed to be.",
						"default": '{"Width":"408","Height":"312"}',
						"parent": "Game Window",
					}, {
						"name": "Maximum Resolution",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc":
							"The maximum resolution the screen is allowed to be.",
						"default": '{"Width":"","Height":""}',
						"parent": "Game Window",
					}, {
						"name": "Window Title",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc": "The title displayed on the game window.",
						"default": "",
						"parent": "Game Window",
					}, {
						"name": "Allow Resize",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Determines whether the players are allowed to resize the game window.",
						"default": "true",
						"parent": "Game Window",
					}, {
						"name": "Initial Fullscreen",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Determines whether the game starts in fullscreen.",
						"default": "false",
						"parent": "Game Window",
					}, {
						"name": "Show Frame",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Determines whether the game window has a frame.",
						"default": "true",
						"parent": "Game Window",
					}, {
						"name": "Always on Top",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Determines whether the game window is always on top of all other windows in the PC.",
						"default": "false",
						"parent": "Game Window",
					}],
				}, {
					"name": "Core Defaults",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"default": "====================================",
					"children": [{
						"name": "Audio Master Volume",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 0,
						"max": 100,
						"decimals": 9007199254740991,
						"desc": "The master volume of the game's audio.",
						"default": "100",
						"parent": "Core Defaults",
					} as NumberPluginParam, {
						"name": "Video Master Volume",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 0,
						"max": 100,
						"decimals": 9007199254740991,
						"desc": "The master volume of the game's videos.",
						"default": "100",
						"parent": "Core Defaults",
					} as NumberPluginParam, {
						"name": "Image Cache Limit",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc":
							"The amount of images that can be stored in memory at once. Default: 10",
						"default": "30",
						"parent": "Core Defaults",
					} as NumberPluginParam, {
						"name": "Decrypter Ignore List",
						"meta": {},
						"type": { "type": 2, "arrayDepth": 1 },
						"dir": "img/",
						"desc":
							"This is a list of all files that the Decrypter will ignore.",
						"default": '["system/Window.png"]',
						"parent": "Core Defaults",
					} as FilePluginParam, {
						"name": "JsonEx Max Depth",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc":
							"Determines the max depth that JSON will encode in the JsonEx class. Default: 100",
						"default": "100",
						"parent": "Core Defaults",
					} as NumberPluginParam, {
						"name": "Retry Intervals",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 1 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc":
							"Determines the intervals in which the game retries to load resources.",
						"default": '["500","1000","3000"]',
						"parent": "Core Defaults",
					} as NumberPluginParam],
				}, {
					"name": "HTML Settings",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"default": "====================================",
					"children": [{
						"name": "Background Color",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc": "The color of the game's background and edges.",
						"default": "#000000",
						"parent": "HTML Settings",
					}, {
						"name": "Image Rendering",
						"meta": {},
						"type": { "type": 5, "arrayDepth": 0 },
						"options": [
							{ "option": "Automatic", "value": "auto" },
							{ "option": "Crisp Edges", "value": "crisp-edges" },
							{ "option": "Pixelated", "value": "pixelated" },
						],
						"desc":
							"The rendering style of the game's dom elements.",
						"default": "auto",
						"parent": "HTML Settings",
					}],
				}, {
					"name": "PIXI Settings",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"default": "====================================",
					"children": [{
						"name": "Garbage Collection Mode",
						"meta": {},
						"type": { "type": 5, "arrayDepth": 0 },
						"options": [{ "option": "Automatic", "value": "" }, {
							"option": "On Scene Change",
							"value": "",
						}, { "option": "Manual", "value": "" }],
						"desc":
							"The form of garbage collection used for sprites.",
						"default": "Automatic",
						"parent": "PIXI Settings",
					}, {
						"name": "Round Pixels",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Enables the round pixels option in the renderer.",
						"default": "false",
						"parent": "PIXI Settings",
					}, {
						"name": "Scale Mode",
						"meta": {},
						"type": { "type": 5, "arrayDepth": 0 },
						"options": [{ "option": "Linear", "value": "" }, {
							"option": "Nearest",
							"value": "",
						}],
						"desc": "The scale mode used by PIXI.",
						"default": "Nearest",
						"parent": "PIXI Settings",
					}, {
						"name": "Wrap Mode",
						"meta": {},
						"type": { "type": 5, "arrayDepth": 0 },
						"options": [{ "option": "Clamp", "value": "" }, {
							"option": "Repeat",
							"value": "",
						}, { "option": "Mirrored Repeat", "value": "" }],
						"desc": "The wrap mode used by PIXI.",
						"default": "Clamp",
						"parent": "PIXI Settings",
					}],
				}],
				"flatParams": [{
					"name": "Game Window",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"default": "====================================",
					"children": [{
						"name": "Game Reconstruction (1.5.X & below)",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							'If using MV 1.5.X or below, this is required for all "Game Window" parameters. For MV 1.6.0+, it does nothing.',
						"default": "true",
						"parent": "Game Window",
					}, {
						"name": "Game Resolution",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc": "The resolution of the game.",
						"default": '{"Width":"816","Height":"624"}',
						"parent": "Game Window",
					}, {
						"name": "Screen Resolution",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc": "The resolution of the screen.",
						"default": '{"Width":"","Height":""}',
						"parent": "Game Window",
					}, {
						"name": "Minimum Resolution",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc":
							"The minimum resolution the screen is allowed to be.",
						"default": '{"Width":"408","Height":"312"}',
						"parent": "Game Window",
					}, {
						"name": "Maximum Resolution",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc":
							"The maximum resolution the screen is allowed to be.",
						"default": '{"Width":"","Height":""}',
						"parent": "Game Window",
					}, {
						"name": "Window Title",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc": "The title displayed on the game window.",
						"default": "",
						"parent": "Game Window",
					}, {
						"name": "Allow Resize",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Determines whether the players are allowed to resize the game window.",
						"default": "true",
						"parent": "Game Window",
					}, {
						"name": "Initial Fullscreen",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Determines whether the game starts in fullscreen.",
						"default": "false",
						"parent": "Game Window",
					}, {
						"name": "Show Frame",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Determines whether the game window has a frame.",
						"default": "true",
						"parent": "Game Window",
					}, {
						"name": "Always on Top",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Determines whether the game window is always on top of all other windows in the PC.",
						"default": "false",
						"parent": "Game Window",
					}],
				}, {
					"name": "Game Reconstruction (1.5.X & below)",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						'If using MV 1.5.X or below, this is required for all "Game Window" parameters. For MV 1.6.0+, it does nothing.',
					"default": "true",
					"parent": "Game Window",
				}, {
					"name": "Game Resolution",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"desc": "The resolution of the game.",
					"default": '{"Width":"816","Height":"624"}',
					"parent": "Game Window",
				}, {
					"name": "Screen Resolution",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"desc": "The resolution of the screen.",
					"default": '{"Width":"","Height":""}',
					"parent": "Game Window",
				}, {
					"name": "Minimum Resolution",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"desc":
						"The minimum resolution the screen is allowed to be.",
					"default": '{"Width":"408","Height":"312"}',
					"parent": "Game Window",
				}, {
					"name": "Maximum Resolution",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"desc":
						"The maximum resolution the screen is allowed to be.",
					"default": '{"Width":"","Height":""}',
					"parent": "Game Window",
				}, {
					"name": "Window Title",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"desc": "The title displayed on the game window.",
					"default": "",
					"parent": "Game Window",
				}, {
					"name": "Allow Resize",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						"Determines whether the players are allowed to resize the game window.",
					"default": "true",
					"parent": "Game Window",
				}, {
					"name": "Initial Fullscreen",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc": "Determines whether the game starts in fullscreen.",
					"default": "false",
					"parent": "Game Window",
				}, {
					"name": "Show Frame",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc": "Determines whether the game window has a frame.",
					"default": "true",
					"parent": "Game Window",
				}, {
					"name": "Always on Top",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc":
						"Determines whether the game window is always on top of all other windows in the PC.",
					"default": "false",
					"parent": "Game Window",
				}, {
					"name": "Core Defaults",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"default": "====================================",
					"children": [{
						"name": "Audio Master Volume",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 0,
						"max": 100,
						"decimals": 9007199254740991,
						"desc": "The master volume of the game's audio.",
						"default": "100",
						"parent": "Core Defaults",
					} as NumberPluginParam, {
						"name": "Video Master Volume",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 0,
						"max": 100,
						"decimals": 9007199254740991,
						"desc": "The master volume of the game's videos.",
						"default": "100",
						"parent": "Core Defaults",
					} as NumberPluginParam, {
						"name": "Image Cache Limit",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc":
							"The amount of images that can be stored in memory at once. Default: 10",
						"default": "30",
						"parent": "Core Defaults",
					} as NumberPluginParam, {
						"name": "Decrypter Ignore List",
						"meta": {},
						"type": { "type": 2, "arrayDepth": 1 },
						"dir": "img/",
						"desc":
							"This is a list of all files that the Decrypter will ignore.",
						"default": '["system/Window.png"]',
						"parent": "Core Defaults",
					} as FilePluginParam, {
						"name": "JsonEx Max Depth",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc":
							"Determines the max depth that JSON will encode in the JsonEx class. Default: 100",
						"default": "100",
						"parent": "Core Defaults",
					} as NumberPluginParam, {
						"name": "Retry Intervals",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 1 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc":
							"Determines the intervals in which the game retries to load resources.",
						"default": '["500","1000","3000"]',
						"parent": "Core Defaults",
					} as NumberPluginParam],
				}, {
					"name": "Audio Master Volume",
					"meta": {},
					"type": { "type": 3, "arrayDepth": 0 },
					"min": 0,
					"max": 100,
					"decimals": 9007199254740991,
					"desc": "The master volume of the game's audio.",
					"default": "100",
					"parent": "Core Defaults",
				} as NumberPluginParam, {
					"name": "Video Master Volume",
					"meta": {},
					"type": { "type": 3, "arrayDepth": 0 },
					"min": 0,
					"max": 100,
					"decimals": 9007199254740991,
					"desc": "The master volume of the game's videos.",
					"default": "100",
					"parent": "Core Defaults",
				} as NumberPluginParam, {
					"name": "Image Cache Limit",
					"meta": {},
					"type": { "type": 3, "arrayDepth": 0 },
					"min": 1,
					"decimals": 9007199254740991,
					"desc":
						"The amount of images that can be stored in memory at once. Default: 10",
					"default": "30",
					"parent": "Core Defaults",
				} as NumberPluginParam, {
					"name": "Decrypter Ignore List",
					"meta": {},
					"type": { "type": 2, "arrayDepth": 1 },
					"dir": "img/",
					"desc":
						"This is a list of all files that the Decrypter will ignore.",
					"default": '["system/Window.png"]',
					"parent": "Core Defaults",
				} as FilePluginParam, {
					"name": "JsonEx Max Depth",
					"meta": {},
					"type": { "type": 3, "arrayDepth": 0 },
					"min": 1,
					"decimals": 9007199254740991,
					"desc":
						"Determines the max depth that JSON will encode in the JsonEx class. Default: 100",
					"default": "100",
					"parent": "Core Defaults",
				} as NumberPluginParam, {
					"name": "Retry Intervals",
					"meta": {},
					"type": { "type": 3, "arrayDepth": 1 },
					"min": 1,
					"decimals": 9007199254740991,
					"desc":
						"Determines the intervals in which the game retries to load resources.",
					"default": '["500","1000","3000"]',
					"parent": "Core Defaults",
				} as NumberPluginParam, {
					"name": "HTML Settings",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"default": "====================================",
					"children": [{
						"name": "Background Color",
						"meta": {},
						"type": { "type": 0, "arrayDepth": 0 },
						"desc": "The color of the game's background and edges.",
						"default": "#000000",
						"parent": "HTML Settings",
					}, {
						"name": "Image Rendering",
						"meta": {},
						"type": { "type": 5, "arrayDepth": 0 },
						"options": [
							{ "option": "Automatic", "value": "auto" },
							{ "option": "Crisp Edges", "value": "crisp-edges" },
							{ "option": "Pixelated", "value": "pixelated" },
						],
						"desc":
							"The rendering style of the game's dom elements.",
						"default": "auto",
						"parent": "HTML Settings",
					}],
				}, {
					"name": "Background Color",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"desc": "The color of the game's background and edges.",
					"default": "#000000",
					"parent": "HTML Settings",
				}, {
					"name": "Image Rendering",
					"meta": {},
					"type": { "type": 5, "arrayDepth": 0 },
					"options": [{ "option": "Automatic", "value": "auto" }, {
						"option": "Crisp Edges",
						"value": "crisp-edges",
					}, { "option": "Pixelated", "value": "pixelated" }],
					"desc": "The rendering style of the game's dom elements.",
					"default": "auto",
					"parent": "HTML Settings",
				}, {
					"name": "PIXI Settings",
					"meta": {},
					"type": { "type": 0, "arrayDepth": 0 },
					"default": "====================================",
					"children": [{
						"name": "Garbage Collection Mode",
						"meta": {},
						"type": { "type": 5, "arrayDepth": 0 },
						"options": [{ "option": "Automatic", "value": "" }, {
							"option": "On Scene Change",
							"value": "",
						}, { "option": "Manual", "value": "" }],
						"desc":
							"The form of garbage collection used for sprites.",
						"default": "Automatic",
						"parent": "PIXI Settings",
					}, {
						"name": "Round Pixels",
						"meta": {},
						"type": { "type": 4, "arrayDepth": 0 },
						"desc":
							"Enables the round pixels option in the renderer.",
						"default": "false",
						"parent": "PIXI Settings",
					}, {
						"name": "Scale Mode",
						"meta": {},
						"type": { "type": 5, "arrayDepth": 0 },
						"options": [{ "option": "Linear", "value": "" }, {
							"option": "Nearest",
							"value": "",
						}],
						"desc": "The scale mode used by PIXI.",
						"default": "Nearest",
						"parent": "PIXI Settings",
					}, {
						"name": "Wrap Mode",
						"meta": {},
						"type": { "type": 5, "arrayDepth": 0 },
						"options": [{ "option": "Clamp", "value": "" }, {
							"option": "Repeat",
							"value": "",
						}, { "option": "Mirrored Repeat", "value": "" }],
						"desc": "The wrap mode used by PIXI.",
						"default": "Clamp",
						"parent": "PIXI Settings",
					}],
				}, {
					"name": "Garbage Collection Mode",
					"meta": {},
					"type": { "type": 5, "arrayDepth": 0 },
					"options": [{ "option": "Automatic", "value": "" }, {
						"option": "On Scene Change",
						"value": "",
					}, { "option": "Manual", "value": "" }],
					"desc": "The form of garbage collection used for sprites.",
					"default": "Automatic",
					"parent": "PIXI Settings",
				}, {
					"name": "Round Pixels",
					"meta": {},
					"type": { "type": 4, "arrayDepth": 0 },
					"desc": "Enables the round pixels option in the renderer.",
					"default": "false",
					"parent": "PIXI Settings",
				}, {
					"name": "Scale Mode",
					"meta": {},
					"type": { "type": 5, "arrayDepth": 0 },
					"options": [{ "option": "Linear", "value": "" }, {
						"option": "Nearest",
						"value": "",
					}],
					"desc": "The scale mode used by PIXI.",
					"default": "Nearest",
					"parent": "PIXI Settings",
				}, {
					"name": "Wrap Mode",
					"meta": {},
					"type": { "type": 5, "arrayDepth": 0 },
					"options": [{ "option": "Clamp", "value": "" }, {
						"option": "Repeat",
						"value": "",
					}, { "option": "Mirrored Repeat", "value": "" }],
					"desc": "The wrap mode used by PIXI.",
					"default": "Clamp",
					"parent": "PIXI Settings",
				}],
				"commands": [],
				"structs": [{
					"name": "GameSize",
					"params": [{
						"name": "Width",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc": "The width of the game's resolution.",
						"default": "816",
					} as NumberPluginParam, {
						"name": "Height",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc": "The height of the game's resolution.",
						"default": "624",
					} as NumberPluginParam],
				}, {
					"name": "WindowSize",
					"params": [{
						"name": "Width",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc": "The width of the game window.",
						"default": "",
					} as NumberPluginParam, {
						"name": "Height",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc": "The height of the game window.",
						"default": "",
					} as NumberPluginParam],
				}, {
					"name": "MinSize",
					"params": [{
						"name": "Width",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc": "The minimum width of the game's resolution.",
						"default": "408",
					} as NumberPluginParam, {
						"name": "Height",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc": "The minimum height of the game's resolution.",
						"default": "312",
					} as NumberPluginParam],
				}, {
					"name": "MaxSize",
					"params": [{
						"name": "Width",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc": "The maximum width of the game's resolution.",
						"default": "",
					} as NumberPluginParam, {
						"name": "Height",
						"meta": {},
						"type": { "type": 3, "arrayDepth": 0 },
						"min": 1,
						"decimals": 9007199254740991,
						"desc": "The maximum height of the game's resolution.",
						"default": "",
					} as NumberPluginParam],
				}],
				"meta": {},
			},
		},
		"warnings": [],
		"remainingContent": "\n\n\n\n\n\n\n\n\n\n(function() {\n})();\n\n",
	});
});

const CODE = `/*:
* @plugindesc Enables more customization over the core mechanics of one's game while also providing additional functions for future plugins.
* @author SumRndmDde
*
* @param Game Window
* @default ====================================
*
* @param Game Reconstruction (1.5.X & below)
* @type boolean
* @desc If using MV 1.5.X or below, this is required for all "Game Window" parameters. For MV 1.6.0+, it does nothing.
* @default true
* @parent Game Window
*
* @param Game Resolution
* @type Struct<GameSize>
* @desc The resolution of the game.
* @default {"Width":"816","Height":"624"}
* @parent Game Window
*
* @param Screen Resolution
* @type Struct<WindowSize>
* @desc The resolution of the screen.
* @default {"Width":"","Height":""}
* @parent Game Window
*
* @param Minimum Resolution
* @type Struct<MinSize>
* @desc The minimum resolution the screen is allowed to be.
* @default {"Width":"408","Height":"312"}
* @parent Game Window
*
* @param Maximum Resolution
* @type Struct<MaxSize>
* @desc The maximum resolution the screen is allowed to be.
* @default {"Width":"","Height":""}
* @parent Game Window
*
* @param Window Title
* @desc The title displayed on the game window.
* Leave blank for default.
* @default
* @parent Game Window
*
* @param Allow Resize
* @type boolean
* @desc Determines whether the players are allowed to resize the game window.
* @default true
* @parent Game Window
*
* @param Initial Fullscreen
* @type boolean
* @desc Determines whether the game starts in fullscreen.
* @default false
* @parent Game Window
*
* @param Show Frame
* @type boolean
* @desc Determines whether the game window has a frame.
* @default true
* @parent Game Window
*
* @param Always on Top
* @type boolean
* @desc Determines whether the game window is always on top of all other windows in the PC.
* @default false
* @parent Game Window
*
* @param Core Defaults
* @default ====================================
*
* @param Audio Master Volume
* @type number
* @min 0
* @max 100
* @decimals 0
* @desc The master volume of the game's audio.
* Default: 100
* @default 100
* @parent Core Defaults
*
* @param Video Master Volume
* @type number
* @min 0
* @max 100
* @decimals 0
* @desc The master volume of the game's videos.
* Default: 100
* @default 100
* @parent Core Defaults
*
* @param Image Cache Limit
* @type number
* @min 1
* @decimals 0
* @desc The amount of images that can be stored in memory at once. Default: 10
* @default 30
* @parent Core Defaults
*
* @param Decrypter Ignore List
* @type file[]
* @dir img/
* @desc This is a list of all files that the Decrypter will ignore.
* @default ["system/Window.png"]
* @parent Core Defaults
*
* @param JsonEx Max Depth
* @type number
* @min 1
* @decimals 0
* @desc Determines the max depth that JSON will encode in the JsonEx class. Default: 100
* @default 100
* @parent Core Defaults
*
* @param Retry Intervals
* @type number[]
* @min 1
* @decimals 0
* @desc Determines the intervals in which the game retries to load resources.
* @default ["500","1000","3000"]
* @parent Core Defaults
*
* @param HTML Settings
* @default ====================================
*
* @param Background Color
* @type text
* @desc The color of the game's background and edges.
* Default: #000000
* @default #000000
* @parent HTML Settings
*
* @param Image Rendering
* @type select
* @option Automatic
* @value auto
* @option Crisp Edges
* @value crisp-edges
* @option Pixelated
* @value pixelated
* @desc The rendering style of the game's dom elements.
* Default: Automatic
* @default auto
* @parent HTML Settings
*
* @param PIXI Settings
* @default ====================================
*
* @param Garbage Collection Mode
* @type select
* @option Automatic
* @option On Scene Change
* @option Manual
* @desc The form of garbage collection used for sprites.
* Default: Automatic
* @default Automatic
* @parent PIXI Settings
*
* @param Round Pixels
* @type boolean
* @desc Enables the round pixels option in the renderer.
* Default: OFF
* @default false
* @parent PIXI Settings
*
* @param Scale Mode
* @type select
* @option Linear
* @option Nearest
* @desc The scale mode used by PIXI.
* Default: Nearest
* @default Nearest
* @parent PIXI Settings
*
* @param Wrap Mode
* @type select
* @option Clamp
* @option Repeat
* @option Mirrored Repeat
* @desc The wrap mode used by PIXI.
* Default: Clamp
* @default Clamp
* @parent PIXI Settings
*
* @help
*
* Game Upgrade
* Version 1.33
* SumRndmDde
*
*
* This plugin enables more customization over the core mechanics of one's game
* while also providing additional functions for future plugins.
*
* It also provides various inputs for manipulating the core NodeJS
* properties setup within one's game.
*
*
* ==============================================================================
*  Basic Idea Behind the Plugin
* ==============================================================================
*
* This plugin has complete access to manipulation over various properties
* of your game window. Normally, such an ability would be impossible; however,
* this game rebuilds the game from scratch upon initialization, allowing for
* control over such things as maximum and minimum resizing along with the
* ability to disable resizing capabilities altogether.
*
* The frame of the game window may also be disabled, and the game now has the
* ability to force the game window to always be on top. Experiement to your
* own desire! ~
*
*
* ==============================================================================
*  Game Window Plugin Commands
* ==============================================================================
*
* The following plugin commands may be used to manipulate the game window:
*
*
*   ForceClose
*
* Closes the game window.
*
*
*   FocusWindow
*
* Focuses on the game window.
*
*
*   MinimizeWindow
*
* Minimizes the game window.
*
*
*   UnminimizeWindow
*
* Unminimizes the game window.
*
*
*   MaximizeWindow
*
* Maximizes the game window.
*
*
*   UnmaximizeWindow
*
* Unmaximize the game window.
*
*
*   RequestAttention
*
* Requests attention to the game window.
*
*
*   TaskBarShow
*
* Makes the game accessable from the task bar.
*
*
*   TaskBarHide
*
* Removes the game from the task bar.
*
*
*   EnterKioskMode
*
* Enters kiosk mode.
*
*
*   LeaveKioskMode
*
* Leaves kiosk mode.
*
*
*   SetProgressBar ratio
*
* Sets the window's progress bar to the value defined by "ratio".
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
* https://www.youtube.com/c/SumRndmDde
*
*
* Until next time,
*   ~ SumRndmDde
*
*/

/*~struct~GameSize:
*
* @param Width
* @type number
* @min 1
* @decimals 0
* @desc The width of the game's resolution.
* Default: 816
* @default 816
*
* @param Height
* @type number
* @min 1
* @decimals 0
* @desc The height of the game's resolution.
* Default: 624
* @default 624
*
*/

/*~struct~WindowSize:
*
* @param Width
* @type number
* @min 1
* @decimals 0
* @desc The width of the game window.
* Leave blank to match the game's resolution.
* @default
*
* @param Height
* @type number
* @min 1
* @decimals 0
* @desc The height of the game window.
* Leave blank to match the game's resolution.
* @default
*
*/

/*~struct~MinSize:
*
* @param Width
* @type number
* @min 1
* @decimals 0
* @desc The minimum width of the game's resolution.
* Leave blank to disallow (default).
* @default 408
*
* @param Height
* @type number
* @min 1
* @decimals 0
* @desc The minimum height of the game's resolution.
* Leave blank to disallow (default).
* @default 312
*
*/

/*~struct~MaxSize:
*
* @param Width
* @type number
* @min 1
* @decimals 0
* @desc The maximum width of the game's resolution.
* Leave blank to disallow (default).
* @default
*
* @param Height
* @type number
* @min 1
* @decimals 0
* @desc The maximum height of the game's resolution.
* Leave blank to disallow (default).
* @default
*
*/

(function() {
})();

`;
