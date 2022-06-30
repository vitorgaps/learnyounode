const fs = require("fs");
let filePath = process.argv[2];
let extension = process.argv[3];
const path = require("path");

fs.readdir(filePath, (err, list) => {
  if (!err) {
    list.forEach((element) => {
      if (path.extname(element) === "." + extension) {
        console.log(element);
      }
    });
  } else console.error(err.message);
});
