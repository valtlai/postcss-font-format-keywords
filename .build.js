// $ deno run --allow-read=. --allow-write=. .build.js

const input = Deno.readTextFileSync("index.js");

const denoOutput = input.replace(
  'from "postcss-value-parser"',
  'from "https://deno.land/x/postcss_value_parser@v4.1.0/mod.js"',
);

const cjsOutput = '"use strict";\n\n' + input
  .replace(/import (\w+) from ("[^"]+")/, "const $1 = require($2)")
  .replace("export default", "module.exports =");

await Promise.all([
  Deno.writeTextFile("mod.js", denoOutput),
  Deno.writeTextFile("index.cjs", cjsOutput),
]);
