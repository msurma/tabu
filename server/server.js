const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', function(socket){

    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});
http.listen(3000);

const roomManager = require('./managers/roomManager');

var room0 = roomManager.createRoom(100);
var room1 = roomManager.createRoom(101);

const gameManager = require('./managers/gameManager');

gameManager.nextRound(room1);

console.log(room0, room1);