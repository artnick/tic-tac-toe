export const CONNECT_GAME_REQUEST = 'CONNECT_GAME_REQUEST';
export const CONNECT_GAME_SUCCESS = 'CONNECT_GAME_SUCCESS';

const TEXT_CAN_MOVE = 'Your move';
const TEXT_CAN_NOT_MOVE = 'Your opponent move';

const connectToGameRequest = () => {
  return {
    type: CONNECT_GAME_REQUEST,
  };
};

const connectToGameSucces = ({ field, player, canMove }) => {
  return {
    type: CONNECT_GAME_SUCCESS,
    info: canMove ? TEXT_CAN_MOVE : TEXT_CAN_NOT_MOVE,
    player,
    canMove, 
    field,
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
  };
}
