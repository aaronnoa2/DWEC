var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.send('pickle rick');
});

var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

var io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.broadcast.emit("user connected");

    socket.on('nick',function (user) {
        socket.broadcast.emit('nick',user);
    });

    socket.on('disconnect', function () {
        socket.broadcast.emit('user disconnected');
    });

    socket.on('chat message', function (msg) {
        socket.broadcast.emit('chat message', msg);
    });
});