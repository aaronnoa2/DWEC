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
puntos = [0, 0];
jugadorGanador = '';

const port = process.env.PORT || 3000;

io.on('connection', function (socket) {
  socket.broadcast.emit("user connected");
  console.log('User connected');

  socket.on('listo', function (nombreJugador) {

    if (!listo[0] || !listo[1]) {
      socket.join('salaJugadores');
      console.log('----Ha entrado el jugador:', nombreJugador);
      jugadores.push({jugador: nombreJugador, socket: socket});

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
          console.log('pusheamos cartas:', cartas);
          if (cartas.length >= 2) {
            console.log('entro en ganador');
            ganador();

            if (rondas >= 2) {

              if (puntos[0] > puntos[1]) {
                jugadorGanador = jugadores[0].jugador;
              }
              if (puntos[1] > puntos[0]) {
                jugadorGanador = jugadores[1].jugador;
              }
              if (puntos[0] === puntos[1]) {
                jugadorGanador = 'Empate';
              }
              io.to('salaJugadores').emit('resultado', jugadorGanador);

              setTimeout(function () {
                io.to('salaJugadores').emit('acabar', false);

                reiniciar();
              }, 3000);
            }
            io.to('salaJugadores').emit('habilitar', false);
          }
        }
      });

      socket.on('salir-sala', function(data) {
        console.log('usuario ha salido de sala');
        socket.leave('salaJugadores');
      })
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
    console.log('Ronda de Empate')
  }
  if (cartas[0] === 0 && cartas[1] === 1) {
    console.log("Gana" + jugadores[1].jugador);
    puntos[1] += 1;
  }
  if (cartas[0] === 0 && cartas[1] === 2) {
    console.log("Gana" + jugadores[0].jugador);
    puntos[0] += 1;
  }
  if (cartas[0] === 1 && cartas[1] === 2) {
    console.log("Gana" + jugadores[1].jugador);
    puntos[1] += 1;
  }
  if (cartas[0] === 1 && cartas[1] === 0) {
    console.log("Gana" + jugadores[0].jugador);
    puntos[0] += 1;
  }
  if (cartas[0] === 2 && cartas[1] === 0) {
    console.log("Gana" + jugadores[1].jugador);
    puntos[1] += 1;
  }
  if (cartas[0] === 2 && cartas[1] === 1) {
    console.log("Gana" + jugadores[0].jugador);
    puntos[0] += 1;
  }

  cartas = [];
  rondas += 1;
}

function reiniciar() {
  jugadores = [];
  listo[0] = false;
  listo[1] = false;
  jugadorGanador = '';
  puntos = [0, 0];
  rondas = 0;
  cartas = [];

  console.log('-------------------- Datos reiniciados')
}
