export const CONNECT_GAME_REQUEST = 'CONNECT_GAME_REQUEST';
export const CONNECT_GAME_SUCCESS = 'CONNECT_GAME_SUCCESS';
export const CONNECT_GAME_FAILURE = 'CONNECT_GAME_FAILURE';

export const OPPONENT_DISCONNECTED = 'OPPONENT_DISCONNECTED';
export const MOVED = 'MOVED';
export const YOUR_WIN = 'YOUR_WIN';
export const YOUR_LOST = 'YOUR_LOST';
export const DRAW = 'DRAW';

const opponentDisconnected = () => {
  return {
    type: OPPONENT_DISCONNECTED,
  };
};

const connectToGameRequest = () => {
  return {
    type: CONNECT_GAME_REQUEST,
  };
};

const connectToGameSucces = ({ field, player, canMove }) => {
  return {
    type: CONNECT_GAME_SUCCESS,
    player,
    canMove, 
    field,
  };
};

const connectToGameFailure = (message) => {
  return {
    type: CONNECT_GAME_FAILURE,
    message,
  };
};

const moved = (index, sign) => {
  return {
    type: MOVED,
    index,
    sign,
  };
};

const youWin = (line) => {
  return {
    type: YOUR_WIN,
    line,
  };
};


const youLost = (line) => {
  return {
    type: YOUR_LOST,
    line,
  };
};


const draw = () => {
  return {
    type: DRAW,
  };
};

export function connectToGame(gameId) {
  return (dispatch, getState, socket) => {
    dispatch(connectToGameRequest());

    socket.emit('connect to game', gameId);

    socket.on('connected to game', function(game) {
      dispatch(connectToGameSucces(game));
      console.log('Connected to game:', game);
    });

    socket.on('failed connect to game', function(message) {
      dispatch(connectToGameFailure(message));
    });

    socket.on('moved', function(cell, sign) {
      dispatch(moved(cell, sign));
    });

    socket.on('opponent disconnected', function() {
      dispatch(opponentDisconnected());
    });

    socket.on('game over', function(result) {
      if (result.winner == -1)
        dispatch(draw());
      else if (result.winner == getState().game.player)
        dispatch(youWin(result.line));
      else
        dispatch(youLost(result.line));
    });
  };
}

export function move(cell) {
  return (dispatch, getState, socket) => {
    if(getState().game.canMove) {
      socket.emit('move', cell);
    }
  };
}
