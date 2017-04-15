export const CONNECT_GAME_REQUEST = 'CONNECT_GAME_REQUEST';
export const CONNECT_GAME_SUCCESS = 'CONNECT_GAME_SUCCESS';

const connectToGameRequest = () => {
  return {
    type: CONNECT_GAME_REQUEST,
  };
};

const connectToGameSucces = () => {
  return {
    type: CONNECT_GAME_SUCCESS,
  };
};

export function connectToGame(gameId) {
  return (dispatch, getState, socket) => {
    dispatch(connectToGameRequest());

    socket.emit('connect to game', gameId);

    socket.on('connected to game', function(data) {
      dispatch(connectToGameSucces());
      console.log('Connected to game:', data);
    });
  };
}
