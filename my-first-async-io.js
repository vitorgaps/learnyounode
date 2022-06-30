const fs = require("fs");
let filePath = process.argv[2];

function callback(err, data) {
  if (!err) {
    console.log(data.toString().split("\n").length - 1);
  }
}

let str = fs.readFile(filePath, "utf-8", callback);
// const str = readBuffer.toString();
let number = Number(str.length - 1);
console.log(number);
