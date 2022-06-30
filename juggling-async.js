let urls = process.argv.slice(2, 5);
var http = require("http");
const bl = require("bl");

urls.forEach((url) => {
  http.get(url, (res) => {
    res.pipe(
      bl(function (err, data) {
        if (!err) {
          let dataStream = data.toString();
          console.log(dataStream);
        }
      })
    );
  });
});
