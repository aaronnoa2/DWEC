var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

var socketIO = require('socket.io');
var io = socketIO(server);

cartas = [];
listo = [false, false];
rondas = 0;

const port = process.env.PORT || 3000;

io.on('connection', function (socket) {
  socket.broadcast.emit("user connected");

  socket.on('listo', function () {
    if (!listo[0] || !listo[1]) {
      socket.join('salaJugadores');

      if (listo[0] === false) {
        listo[0] = true;
        console.log(listo[0]);
        console.log(listo[1]);
      }
      else {
        listo[1] = true;
        console.log(listo[0]);
        console.log(listo[1]);
      }
      if (listo[0] === true && listo[1] === true) {
        io.to('salaJugadores').emit('empezar', true);
      }

      socket.on('elegirCarta', function (carta) {
        if (listo[0] === true && listo[1] === true) {
          cartas.push(carta);
          console.log('has pusheado la carta' + carta);
          console.log(cartas.length + ' Es el numero de cartas que hay en el array');
          if (cartas.length >= 2) {
            ganador();
            io.to('salaJugadores').emit('habilitar', false);

            if (rondas >= 5) {
              io.to('salaJugadores').emit('acabar', false);
              socket.leave('salaJugadores');
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
    console.log("Gana el jugador 2");
  }
  if (cartas[0] === 0 && cartas[1] === 2) {
    console.log("Gana el jugador 1");
  }
  if (cartas[0] === 1 && cartas[1] === 2) {
    console.log("Gana el jugador 2");
  }
  if (cartas[0] === 1 && cartas[1] === 0) {
    console.log("Gana el jugador 1");
  }
  if (cartas[0] === 2 && cartas[1] === 0) {
    console.log("Gana el jugador 2");
  }
  if (cartas[0] === 2 && cartas[1] === 1) {
    console.log("Gana el jugador 1");
  }
  cartas = [];
  rondas += 1;
}
