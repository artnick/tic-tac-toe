export const CREATE_GAME_REQUEST = 'CREATE_GAME_REQUEST';

const createGameRequest = () => {
  return {
    type: CREATE_GAME_REQUEST,
  };
};

export function createGame() {
  return (dispatch, getState, socket) => {
    dispatch(createGameRequest());

    socket.emit('create game');
    socket.on('game created', function(gameId) {
      console.log('Game created:', gameId);
    });
  };
}
