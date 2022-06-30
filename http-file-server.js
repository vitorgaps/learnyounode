let [port, filePath] = process.argv.slice(2, 4);
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  var stream = fs.createReadStream(filePath);
  stream.pipe(response);
});

server.listen(port);
