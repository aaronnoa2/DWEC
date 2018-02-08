var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

var socketIO = require('socket.io');
var io = socketIO(server);

cartas = [];
jugadores = 0;

const port = process.env.PORT || 3000;

io.on('connection', function (socket) {
    socket.broadcast.emit("user connected");

    socket.on('elegirCarta',function (carta) {
      cartas.push(carta);
      if (cartas.length >= 2){
        ganador();
      }
    });


    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    })
});

server.listen(port, function () {
  console.log('started on port ${port}')
});

function ganador() {
  if(cartas[0] === cartas[1]){
      console.log('Empate')
  }
  if (cartas[0] === 0 && cartas[1] === 1) {
    console.log("Gana el jugador 2");
  }
  if (cartas[0] === 0 && cartas[1] === 2) {
    console.log("Gana el jugador 1");
  }
  if (cartas[0] === 1 && cartas[1] === 2) {
    console.log("Gana el jugador 2");
  }
  if (cartas[0] === 1 && cartas[1] === 0){
    console.log("Gana el jugador 1");
  }
  if (cartas[0] === 2 && cartas[1] === 0) {
    console.log("Gana el jugador 2");
  }
  if (cartas[0] === 2 && cartas[1] === 1) {
    console.log("Gana el jugador 1");
  }
  cartas.length=0;
}
