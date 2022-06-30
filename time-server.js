let port = process.argv[2];
const net = require("net");

function zeroFilled(value) {
  return ("0" + value).slice(-2);
}

const server = net.createServer((socket) => {
  var date = new Date();
  var data =
    date.getFullYear() +
    "-" +
    zeroFilled(date.getMonth() + 1) +
    "-" +
    zeroFilled(date.getDate()) +
    " " +
    zeroFilled(date.getHours()) +
    ":" +
    zeroFilled(date.getMinutes()) +
    "\n";
  socket.end(data);
});

server.listen(port);
