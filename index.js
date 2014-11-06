var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.get('/chat', function(req, res){
  res.sendFile('/var/www/node/chat-exam/halutama.html');
});

io.on('connection', function(socket){
  socket.on('chatmessage', function(msg){
    io.emit('chatmessage', msg);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

