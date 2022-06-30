const fs = require("fs");
const path = require("path");

module.exports = function (directoryName, fileNameExtension, callBackFunction) {
  fs.readdir(directoryName, (err, list) => {
    if (!err) {
      callBackFunction(
        null,
        list.filter((listItem) => {
          return path.extname(listItem) === "." + fileNameExtension;
        })
      );
    } else return callBackFunction(err);
  });
};
