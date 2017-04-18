import Game from './Game';
var io = require('socket.io')(server);

export function(server) {

  const games = new Map();

  io.sockets.on('connection', function(socket) {
    socket.on('create game', function() {
      const gameId = Math.random().toString(36).substr(2, 9);
      games.set(gameId, new Game(socket.id));
      socket.gameId = gameId;
      socket.join(gameId);
      io.sockets.in(gameId).emit('game created', gameId);
      console.log('Game created: '+ gameId)
    });

    socket.on('connect to game', function(gameId) {
      const game = games.get(gameId);
      if(game) {
        if(game.addUser(socket.id)) {
          socket.gameId = gameId;
          socket.join(gameId);
          const { players, field, whoseTurn } = games.get(gameId);
          const response = {
            player: players.get(socket.id),
            field,
          }
          socket.emit('connected to game', response);
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
      if(game) {
        if(game.move(socket.id, cell)) {
          io.sockets.in(socket.gameId).emit('moved', cell, game.players.get(socket.id));
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