const express = require('express');

const app = express();

const http = require('http').Server(app);

const io = require('socket.io')(http);

app.use(require('./routes/streaming.routes'));

// Establece la ruta para elementos estáticos
app.use(express.static('src/public'));


io.on('connection', (socket) => {

    socket.on('stream', (image) => {

        socket.broadcast.emit('stream', image);

    })

})

module.exports = http;