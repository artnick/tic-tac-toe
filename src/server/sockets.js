const Game = require('./Game');

module.exports =  function(server) {
  const io = require('socket.io')(server);

  //all games are keeping here
  const games = new Map();

  io.sockets.on('connection', function(socket) {
    socket.on('create game', function() {
      const gameId = Math.random().toString(36).substr(2, 9);

      //add new game in Map
      games.set(gameId, new Game(socket.id));

      //join room and persist gameId to socket
      socket.join(gameId);
      socket.gameId = gameId;
      socket.emit('game created', gameId);
    });

    socket.on('connect to game', function(gameId) {
      const game = games.get(gameId);

      //check existence of a game
      if(game) {
        //check available slot in game
        if(game.addUser(socket.id)) {

          //join room and persist gameId to socket
          socket.gameId = gameId;
          socket.join(gameId);

          //create response contained info about game
          const { players, field, whoseTurn } = games.get(gameId);
          const response = {
            player: players.get(socket.id),
            field,
          }
          socket.emit('connected to game', response);

          //report first player he is allowed to join game
          socket.broadcast.in(gameId).emit('second player connected');
        } else {
          socket.emit('failed connect to game', 'Game is full');
        }
      } else {
        socket.emit('failed connect to game', 'Game dont found');
      }
    });

    socket.on('move', function(cell) {
      const game = games.get(socket.gameId);
      //check existence of a game
      if(game) {
        //check if move is alowed
        if(game.move(socket.id, cell)) {
          io.sockets.in(socket.gameId).emit('moved', cell, game.players.get(socket.id));

          //check if game over
          const result = game.checkWin();
          if(result)
            io.sockets.in(socket.gameId).emit('game over', result);
        } else {
          socket.emit('wrong move');
        }
      }
    });

    socket.on('restart', function(cell) {
      const game = games.get(socket.gameId);
      if(game) {
        if(game.restart()) {
          io.sockets.in(socket.gameId).emit('restarting');
        }
      }
    });

    socket.on('disconnect', function () {
      games.delete(socket.gameId);
      socket.broadcast.in(socket.gameId).emit('opponent disconnected');
    });
  });
}