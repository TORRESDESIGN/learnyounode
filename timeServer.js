const net = require('net');
const portN = process.argv[2];
var a = new Date().getFullYear().toString();
var b = (new Date().getMonth() + 1).toString();
var c = new Date().getDate().toString();
var d = new Date().getHours().toString();
var e = new Date().getMinutes().toString();
var date = `${a}-0${b}-0${c} ${d}:${e}`;

var server = net.createServer(socket => {
	socket.write(date + "\n");
	socket.end();
});
server.listen(portN);

/*-----------alternative solution--------

var net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))


*/