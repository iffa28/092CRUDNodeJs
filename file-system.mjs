import fs from "fs";

const buffer = fs.readFileSync("file-system.mjs");

console.info(buffer.toString());

fs.writeFileSync("temp.text", "Hello World");