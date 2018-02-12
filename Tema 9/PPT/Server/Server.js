var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

var socketIO = require('socket.io');
var io = socketIO(server);

cartas = [];
jugadores = [];
listo = [false, false];
rondas = 0;
puntos = [0,0];

const port = process.env.PORT || 3000;

io.on('connection', function (socket) {
  socket.broadcast.emit("user connected");
  console.log('User connected');

  socket.on('listo', function () {
    if (!listo[0] || !listo[1]) {
      socket.join('salaJugadores');

      if (listo[0] === false) {
        listo[0] = true;
      }
      else {
        listo[1] = true;
      }
      if (listo[0] === true && listo[1] === true) {
        io.to('salaJugadores').emit('empezar', true);
      }

      socket.on('elegirCarta', function (data) {
        if (listo[0] === true && listo[1] === true) {
          cartas.push(data.carta);
          jugadores.push(data.jugador);
          if (cartas.length >= 2) {
            ganador();
            io.to('salaJugadores').emit('habilitar', false);

            if (rondas >= 5) {
              if (puntos[0] > puntos[1]){
                console.log('Ha ganado' + jugadores[0])
              }
              if (puntos[1] > puntos[0]){
                console.log('Ha ganado' + jugadores[1])
              }
              else{
                console.log('Sois un poco tontos')
              }
              io.to('salaJugadores').emit('resultado','hola');

              setTimeout(function () {
                io.to('salaJugadores').emit('acabar', false);
                socket.leave('salaJugadores');
                jugadores = [];
                listo[0] = false;
                listo[1] = false
              } , 5000);
            }
          }
        }
      });
    }
  });

  socket.on('chat message', function (data) {
    io.emit('chat message', data);
  });

  socket.on('disconnect', function () {
    socket.broadcast.emit('user disconnected');
    console.log('User disconnected');
  });
});

server.listen(port, function () {
  console.log('started on port ${port}');
});

function ganador() {
  if (cartas[0] === cartas[1]) {
    console.log('Empate')
  }
  if (cartas[0] === 0 && cartas[1] === 1) {
    console.log("Gana" + jugadores[1]);
    puntos[1] += 1;
  }
  if (cartas[0] === 0 && cartas[1] === 2) {
    console.log("Gana" + jugadores[0]);
    puntos[0] += 1;
  }
  if (cartas[0] === 1 && cartas[1] === 2) {
    console.log("Gana" + jugadores[1]);
    puntos[1] += 1;
  }
  if (cartas[0] === 1 && cartas[1] === 0) {
    console.log("Gana" + jugadores[0]);
    puntos[0] += 1;
  }
  if (cartas[0] === 2 && cartas[1] === 0) {
    console.log("Gana" + jugadores[1]);
    puntos[1] += 1;
  }
  if (cartas[0] === 2 && cartas[1] === 1) {
    console.log("Gana" + jugadores[0]);
    puntos[0] += 1;
  }
  cartas = [];
  rondas += 1;
}
