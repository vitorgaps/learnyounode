let url = process.argv[2];
var http = require("http");

http.get(url, (res) => {
  res.on("data", function (data) {
    console.log(data.toString());
  });
});
