let port = process.argv[2];
const map = require("through2-map");
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.method !== "POST") {
    return response.end("Not a POST\n");
  }

  request
    .pipe(
      map((chunk) => {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(response);
});

server.listen(port);
