let url = process.argv[2];
var http = require("http");
const bl = require("bl");

http.get(url, (res) => {
  res.pipe(
    bl(function (err, data) {
      if (!err) {
        let dataStream = data.toString();
        console.log(Number(dataStream.split("").length));
        console.log(dataStream);
      }
    })
  );
});
