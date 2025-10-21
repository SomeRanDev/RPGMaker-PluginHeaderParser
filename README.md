# Plugin Header Parser for RPG Maker MV/MZ

Parses the header comment for an RPG Maker MV/MZ plugin using Deno and TypeScript. This can be used as a standalone script or a Deno library.

## Command-Line Usage

If you download this repo, this can be used as a tool on the command-line using Deno:

```
deno run start <input_plugin_file.js> <output_json_file.json>
```

## Use in Custom Script

OR, this can be imported into a Deno project:

```js
import { parseHeader } from "https://raw.githubusercontent.com/SomeRanDev/RPGMaker-PluginHeaderParser/refs/heads/main/Main.ts";
const headerData = parseHeaders(Deno.readTextFileSync("MY_PLUGIN.js")); // or parseHeadersFromFile("MY_PLUGIN.js")
```
