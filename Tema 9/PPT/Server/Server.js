var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

var socketIO = require('socket.io');
var io = socketIO(server);

cartas = [];
jugadores = 0;
listo = [false,false];

const port = process.env.PORT || 3000;

io.on('connection', function (socket) {
    socket.broadcast.emit("user connected");

    socket.on('listo',function () {
      if(listo[0] === false)
        listo[0] = true;
      else
        listo[1] = true;
      if(listo[0] === true && listo[1] ===true){

        socket.on('salaDeJuego',function () {
          console.log('entra en sala de juego');
          socket.join('salaJugadores');
          console.log('añadido a la sala jugadores');
          jugadores +=1;

          socket.on('iniciarPartida',function () {

            socket.on('elegirCarta',function (carta) {

              if(jugadores === 2){
                cartas.push(carta);
                if (cartas.length >= 2){
                  ganador();
                }
              }
            });
          });
        });
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
