const mymodule = require("./mymodule");
let directoryName = process.argv[2];
let fileNameExtension = process.argv[3];

mymodule(directoryName, fileNameExtension, (err, data) => {
  if (!err) {
    data.forEach((element) => {
      console.log(element);
    });
  }
});
