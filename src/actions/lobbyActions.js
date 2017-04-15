export const CREATE_GAME_REQUEST = 'CREATE_GAME_REQUEST';
export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS';

const URL = 'http://localhost:8080/game/';

const createGameRequest = () => {
  return {
    type: CREATE_GAME_REQUEST,
  };
};

const createGameSucces = (gameId) => {
  return {
    type: CREATE_GAME_SUCCESS,
    url: URL + gameId,
  };
};

export function createGame() {
  return (dispatch, getState, socket) => {
    dispatch(createGameRequest());

    socket.emit('create game');
    socket.on('game created', function(gameId) {
      dispatch(createGameSucces(gameId));
    });
  };
}
