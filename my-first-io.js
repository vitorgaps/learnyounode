const fs = require("fs");
let filePath = process.argv[2];

let readBuffer = fs.readFileSync(filePath);
const str = readBuffer.toString();
let number = Number(str.split("\n").length - 1);
console.log(number);
