export const CONNECT_GAME_REQUEST = 'CONNECT_GAME_REQUEST';
export const CONNECT_GAME_SUCCESS = 'CONNECT_GAME_SUCCESS';

export const MOVE_IS_MADE = 'MOVE_IS_MADE';
export const YOUR_WIN = 'YOUR_WIN';
export const YOUR_LOST = 'YOUR_LOST';
export const DRAW = 'DRAW';

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

const moveIsMade = (index, sign) => {
  return {
    type: MOVE_IS_MADE,
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

    socket.on('failed to connect to game', function(msg) {
      console.log('Failed to connect to game:', msg);
    });

    socket.on('moved', function(cell, sign) {
      dispatch(moveIsMade(cell, sign));
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
