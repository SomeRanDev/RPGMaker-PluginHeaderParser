import { assertEquals } from "jsr:@std/assert@1.0.15";
import { parseHeaders } from "../Main.ts";
import type {
	NumberPluginParam,
	PluginParamArrayType,
} from "../types/PluginParam.ts";

Deno.test("preloader core", function () {
	const content = `/*:
 * @plugindesc Allows developers to preload specific audio and images before running the game through a new pre-title scene.
 * @author SumRndmDde
 *
 * @param Custom Background
 * @desc A custom background image for the preload scene.
 * Leave blank for default. Place in /img/SumRndmDde/preload/
 * @default
 *
 * @param Loading Text
 * @desc The format of the text used to describe which files are being loaded. Use %1 to represent the filepath.
 * @default Loading %1
 *
 * @param Complete Text
 * @desc The text used when all of the loading is complete.
 * @default Load Complete!
 *
 * @param Use Fade Transitions
 * @type boolean
 * @desc If 'true', a fade will occur between the Title and Preloading scenes.
 * @default true
 *
 * @param Load Font Size
 * @type number
 * @min 0
 * @decimals 0
 * @desc The font size of the text when displaying the loading url.
 * @default 28
 *
 * @param Gauge Back Color
 * @desc The color used for the background of the loading gauge.
 * @default rgba(0, 0, 0, 0.4)
 *
 * @param Gauge Main Color
 * @desc The color used for the main part of the loading gauge.
 * @default rgba(255, 0, 0, 0.4)
 *
 * @param Custom Preloads
 * @type Struct<CustomPreloads>[]
 * @desc A list of all custom preloads for the game.
 * @default []
 *
 * @param Audio Preloads
 * @default ====================================
 *
 * @param Cache Audio
 * @desc Keeps previous audio objects stored for quick retrieval.
 * List all the audio folders that will use caching.
 * @default bgm, bgs, me
 * @parent Audio Preloads
 *
 * @param Preload BGM
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which BGM are preloaded.
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default important
 * @parent Audio Preloads
 *
 * @param Preload BGS
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which BGS are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Audio Preloads
 *
 * @param Preload ME
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which ME are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default important
 * @parent Audio Preloads
 *
 * @param Preload SE
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which SE are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Audio Preloads
 *
 * @param Image Preloads
 * @default ====================================
 *
 * @param Preload System
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which system images are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload Animations
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which animations are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload Battlebacks1
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which battlebacks1 are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload Battlebacks2
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which battlebacks2 are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload Characters
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which characters are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload Enemies
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which enemies are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload Faces
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which faces are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default important
 * @parent Image Preloads
 *
 * @param Preload Parallaxes
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which parallaxes are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload Pictures
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which pictures are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload SV_Actors
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which SV actors are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload SV_Enemies
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which SV enemies are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload Tilesets
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which tilesets are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default important
 * @parent Image Preloads
 *
 * @param Preload Titles1
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which titles1 are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @param Preload Titles2
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which titles2 are preloaded. Choices are:
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default none
 * @parent Image Preloads
 *
 * @help
 *
 * Preloader Core
 * Version 1.10
 * SumRndmDde
 *
 *
 * This plugin requires the Game Upgrade plugin:
 * http://sumrndm.site/game-upgrade/
 *
 * This plugin allows developers to preload specific audio and images before
 * running the game through a new pre-title scene.
 *
 *
 * ==============================================================================
 *  Preload Options
 * ==============================================================================
 *
 * For all of the audio and img folders, you have four options for preloading
 * files: none, custom, important, all.
 *
 *
 *   none
 *
 * If a preload is set to "none", no files from that folder will be preloaded.
 *
 *
 *   custom: f1, f2, ...
 *
 * If set to "custom", specific files can be selected to be preloaded.
 * Simply input the filenames, no extensions, and separate each with a comma.
 * For example - custom: Battle1, Battle2, Theme6
 *
 *
 *   important
 *
 * If set to "important", then files that are deemed "important" will be
 * preloaded. What's considered "important" is different for each folder. For
 * example, important BGMs include ones specified in the database, important
 * Animation Images include all images used in animations, etc.
 *
 *
 *   all
 *
 * All files within the folder will be preloaded.
 * This feature can only be used on Node.js supported platforms.
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * If you wish to manually preload audio or images in game, the following
 * Plugin Commands can be used:
 *
 *
 *   PreloadAudio [folder] [name]
 *
 * Replace "folder" with one of the audio folders, and replace "name" with one of
 * the file names within that folder.
 * For example - PreloadAudio bgm Theme6
 *
 *
 *   PreloadImage [folder] [name] [hue]
 *
 * Replace "folder" with one of the img folders, and replace "name" with one of
 * the file names within that folder. You can also use the optional "hue"
 * argument to have the preloaded image preload a specific hue.
 * For example - PreloadImage titles1 Book 0
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

/*~struct~CustomPreloads:
 *
 * @param Preload Path
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images
 * @type combo
 * @option all
 * @option important
 * @option custom:
 * @option none
 * @desc Determines which images are preloaded from Preload Path.
 * Type in "custom: f1, f2, ..." to use custom files.
 * @default
 *
 */

var SRD = SRD || {};
SRD.PreloaderCore = SRD.PreloaderCore || {};

`;

	assertEquals(parseHeaders(content), {
		"data": {
			"default": {
				"target": 0,
				"plugindesc":
					"Allows developers to preload specific audio and images before running the game through a new pre-title scene.",
				"author": "SumRndmDde",
				"help":
					'Preloader Core\nVersion 1.10\nSumRndmDde\n\nThis plugin requires the Game Upgrade plugin:\nhttp://sumrndm.site/game-upgrade/\n\nThis plugin allows developers to preload specific audio and images before\nrunning the game through a new pre-title scene.\n\n==============================================================================\nPreload Options\n==============================================================================\n\nFor all of the audio and img folders, you have four options for preloading\nfiles: none, custom, important, all.\n\nnone\n\nIf a preload is set to "none", no files from that folder will be preloaded.\n\ncustom: f1, f2, ...\n\nIf set to "custom", specific files can be selected to be preloaded.\nSimply input the filenames, no extensions, and separate each with a comma.\nFor example - custom: Battle1, Battle2, Theme6\n\nimportant\n\nIf set to "important", then files that are deemed "important" will be\npreloaded. What\'s considered "important" is different for each folder. For\nexample, important BGMs include ones specified in the database, important\nAnimation Images include all images used in animations, etc.\n\nall\n\nAll files within the folder will be preloaded.\nThis feature can only be used on Node.js supported platforms.\n\n==============================================================================\nPlugin Commands\n==============================================================================\n\nIf you wish to manually preload audio or images in game, the following\nPlugin Commands can be used:\n\nPreloadAudio [folder] [name]\n\nReplace "folder" with one of the audio folders, and replace "name" with one of\nthe file names within that folder.\nFor example - PreloadAudio bgm Theme6\n\nPreloadImage [folder] [name] [hue]\n\nReplace "folder" with one of the img folders, and replace "name" with one of\nthe file names within that folder. You can also use the optional "hue"\nargument to have the preloaded image preload a specific hue.\nFor example - PreloadImage titles1 Book 0\n\n==============================================================================\nEnd of Help File\n==============================================================================\n\nWelcome to the bottom of the Help file.\n\nThanks for reading!\nIf you have questions, or if you enjoyed this Plugin, please check\nout my YouTube channel!\n\nhttps://www.youtube.com/c/SumRndmDde\n\nUntil next time,\n~ SumRndmDde\n',
				"params": [{
					"name": "Custom Background",
					"meta": {},
					"type": { "type": 0 },
					"desc": "A custom background image for the preload scene.",
					"default": "",
				}, {
					"name": "Loading Text",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"The format of the text used to describe which files are being loaded. Use %1 to represent the filepath.",
					"default": "Loading %1",
				}, {
					"name": "Complete Text",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"The text used when all of the loading is complete.",
					"default": "Load Complete!",
				}, {
					"name": "Use Fade Transitions",
					"meta": {},
					"type": { "type": 4 },
					"desc":
						"If 'true', a fade will occur between the Title and Preloading scenes.",
					"default": "true",
				}, {
					"name": "Load Font Size",
					"meta": {},
					"type": { "type": 3 },
					"min": 0,
					"decimals": 9007199254740991,
					"desc":
						"The font size of the text when displaying the loading url.",
					"default": "28",
				} as NumberPluginParam, {
					"name": "Gauge Back Color",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"The color used for the background of the loading gauge.",
					"default": "rgba(0, 0, 0, 0.4)",
				}, {
					"name": "Gauge Main Color",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"The color used for the main part of the loading gauge.",
					"default": "rgba(255, 0, 0, 0.4)",
				}, {
					"name": "Custom Preloads",
					"meta": {},
					"type": {
						"type": 21,
						"subtype": { "type": 0 },
					} as PluginParamArrayType,
					"desc": "A list of all custom preloads for the game.",
					"default": "[]",
				}, {
					"name": "Audio Preloads",
					"meta": {},
					"type": { "type": 0 },
					"default": "====================================",
					"children": [{
						"name": "Cache Audio",
						"meta": {},
						"type": { "type": 0 },
						"desc":
							"Keeps previous audio objects stored for quick retrieval.",
						"default": "bgm, bgs, me",
						"parent": "Audio Preloads",
					}, {
						"name": "Preload BGM",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc": "Determines which BGM are preloaded.",
						"default": "important",
						"parent": "Audio Preloads",
					}, {
						"name": "Preload BGS",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which BGS are preloaded. Choices are:",
						"default": "none",
						"parent": "Audio Preloads",
					}, {
						"name": "Preload ME",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which ME are preloaded. Choices are:",
						"default": "important",
						"parent": "Audio Preloads",
					}, {
						"name": "Preload SE",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which SE are preloaded. Choices are:",
						"default": "none",
						"parent": "Audio Preloads",
					}],
				}, {
					"name": "Image Preloads",
					"meta": {},
					"type": { "type": 0 },
					"default": "====================================",
					"children": [{
						"name": "Preload System",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which system images are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Animations",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which animations are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Battlebacks1",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which battlebacks1 are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Battlebacks2",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which battlebacks2 are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Characters",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which characters are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Enemies",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which enemies are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Faces",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which faces are preloaded. Choices are:",
						"default": "important",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Parallaxes",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which parallaxes are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Pictures",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which pictures are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload SV_Actors",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which SV actors are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload SV_Enemies",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which SV enemies are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Tilesets",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which tilesets are preloaded. Choices are:",
						"default": "important",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Titles1",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which titles1 are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Titles2",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which titles2 are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}],
				}],
				"flatParams": [{
					"name": "Custom Background",
					"meta": {},
					"type": { "type": 0 },
					"desc": "A custom background image for the preload scene.",
					"default": "",
				}, {
					"name": "Loading Text",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"The format of the text used to describe which files are being loaded. Use %1 to represent the filepath.",
					"default": "Loading %1",
				}, {
					"name": "Complete Text",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"The text used when all of the loading is complete.",
					"default": "Load Complete!",
				}, {
					"name": "Use Fade Transitions",
					"meta": {},
					"type": { "type": 4 },
					"desc":
						"If 'true', a fade will occur between the Title and Preloading scenes.",
					"default": "true",
				}, {
					"name": "Load Font Size",
					"meta": {},
					"type": { "type": 3 },
					"min": 0,
					"decimals": 9007199254740991,
					"desc":
						"The font size of the text when displaying the loading url.",
					"default": "28",
				} as NumberPluginParam, {
					"name": "Gauge Back Color",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"The color used for the background of the loading gauge.",
					"default": "rgba(0, 0, 0, 0.4)",
				}, {
					"name": "Gauge Main Color",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"The color used for the main part of the loading gauge.",
					"default": "rgba(255, 0, 0, 0.4)",
				}, {
					"name": "Custom Preloads",
					"meta": {},
					"type": {
						"type": 21,
						"subtype": { "type": 0 },
					} as PluginParamArrayType,
					"desc": "A list of all custom preloads for the game.",
					"default": "[]",
				}, {
					"name": "Audio Preloads",
					"meta": {},
					"type": { "type": 0 },
					"default": "====================================",
					"children": [{
						"name": "Cache Audio",
						"meta": {},
						"type": { "type": 0 },
						"desc":
							"Keeps previous audio objects stored for quick retrieval.",
						"default": "bgm, bgs, me",
						"parent": "Audio Preloads",
					}, {
						"name": "Preload BGM",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc": "Determines which BGM are preloaded.",
						"default": "important",
						"parent": "Audio Preloads",
					}, {
						"name": "Preload BGS",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which BGS are preloaded. Choices are:",
						"default": "none",
						"parent": "Audio Preloads",
					}, {
						"name": "Preload ME",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which ME are preloaded. Choices are:",
						"default": "important",
						"parent": "Audio Preloads",
					}, {
						"name": "Preload SE",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which SE are preloaded. Choices are:",
						"default": "none",
						"parent": "Audio Preloads",
					}],
				}, {
					"name": "Cache Audio",
					"meta": {},
					"type": { "type": 0 },
					"desc":
						"Keeps previous audio objects stored for quick retrieval.",
					"default": "bgm, bgs, me",
					"parent": "Audio Preloads",
				}, {
					"name": "Preload BGM",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc": "Determines which BGM are preloaded.",
					"default": "important",
					"parent": "Audio Preloads",
				}, {
					"name": "Preload BGS",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc": "Determines which BGS are preloaded. Choices are:",
					"default": "none",
					"parent": "Audio Preloads",
				}, {
					"name": "Preload ME",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc": "Determines which ME are preloaded. Choices are:",
					"default": "important",
					"parent": "Audio Preloads",
				}, {
					"name": "Preload SE",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc": "Determines which SE are preloaded. Choices are:",
					"default": "none",
					"parent": "Audio Preloads",
				}, {
					"name": "Image Preloads",
					"meta": {},
					"type": { "type": 0 },
					"default": "====================================",
					"children": [{
						"name": "Preload System",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which system images are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Animations",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which animations are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Battlebacks1",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which battlebacks1 are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Battlebacks2",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which battlebacks2 are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Characters",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which characters are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Enemies",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which enemies are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Faces",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which faces are preloaded. Choices are:",
						"default": "important",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Parallaxes",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which parallaxes are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Pictures",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which pictures are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload SV_Actors",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which SV actors are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload SV_Enemies",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which SV enemies are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Tilesets",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which tilesets are preloaded. Choices are:",
						"default": "important",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Titles1",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which titles1 are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}, {
						"name": "Preload Titles2",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which titles2 are preloaded. Choices are:",
						"default": "none",
						"parent": "Image Preloads",
					}],
				}, {
					"name": "Preload System",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which system images are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Animations",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which animations are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Battlebacks1",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which battlebacks1 are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Battlebacks2",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which battlebacks2 are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Characters",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which characters are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Enemies",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which enemies are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Faces",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which faces are preloaded. Choices are:",
					"default": "important",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Parallaxes",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which parallaxes are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Pictures",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which pictures are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload SV_Actors",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which SV actors are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload SV_Enemies",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which SV enemies are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Tilesets",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which tilesets are preloaded. Choices are:",
					"default": "important",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Titles1",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which titles1 are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}, {
					"name": "Preload Titles2",
					"meta": {},
					"type": { "type": 6 },
					"options": [
						{ "option": "all", "value": "" },
						{ "option": "important", "value": "" },
						{ "option": "custom:", "value": "" },
						{ "option": "none", "value": "" },
					],
					"desc":
						"Determines which titles2 are preloaded. Choices are:",
					"default": "none",
					"parent": "Image Preloads",
				}],
				"commands": [],
				"structs": [{
					"name": "CustomPreloads",
					"params": [{
						"name": "Preload Path",
						"meta": {},
						"type": { "type": 0 },
						"desc":
							"This is a custom folder path to reference the images to be preloaded in the /img/ folder.",
						"default": "",
					}, {
						"name": "Preload Images",
						"meta": {},
						"type": { "type": 6 },
						"options": [
							{ "option": "all", "value": "" },
							{ "option": "important", "value": "" },
							{ "option": "custom:", "value": "" },
							{ "option": "none", "value": "" },
						],
						"desc":
							"Determines which images are preloaded from Preload Path.",
						"default": "",
					}],
				}],
				"meta": {},
			},
		},
		"warnings": [],
	});
});
