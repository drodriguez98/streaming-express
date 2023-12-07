const express = require('express');

const app = express();

const http = require('http').Server(app);

const io = require('socket.io')(http);

app.use(require('./routes/streaming.routes'));

app.use(express.static(__dirname + "/public"));

module.exports = http;

// app.get('/', (req, res) => { res.send('Hello!') }); 
// const port = process.env.PORT || 3000