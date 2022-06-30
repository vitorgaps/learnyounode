let port = process.argv[2];
const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  if (request.method !== "GET") {
    return response.end("Not a GET\n");
  }

  var requestUrl = url.parse(request.url);

  if (requestUrl.pathname === "/api/parsetime") {
    const date = new Date(
      new Date(requestUrl.search.replace("?iso=", "")).toISOString()
    );
    const data = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };

    return response
      .writeHead(200, { "Content-Type": "application/json" })
      .end(JSON.stringify(data));
  } else if (requestUrl.pathname === "/api/unixtime") {
    response.writeHead(200, { "Content-Type": "application/json" });
    return response.end(
      JSON.stringify({
        unixtime: new Date(requestUrl.search.replace("?iso=", "")).getTime(),
      })
    );
  }
});

server.listen(port);
