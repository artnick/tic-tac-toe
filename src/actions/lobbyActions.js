export const CREATE_GAME_REQUEST = 'CREATE_GAME_REQUEST';
export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS';
export const JOIN_GAME = 'JOIN_GAME';

const createGameRequest = () => {
  return {
    type: CREATE_GAME_REQUEST,
  };
};

const createGameSucces = (gameId) => {
  return {
    type: CREATE_GAME_SUCCESS,
    gameId,
  };
};

const joinGame = () => {
  return {
    type: JOIN_GAME,
  };
};

export function createGame() {
  return (dispatch, getState, socket) => {
    dispatch(createGameRequest());

    socket.emit('create game');
    socket.on('game created', function(gameId) {
      dispatch(createGameSucces(gameId));
    });

    socket.on('second player connected', function() {
      dispatch(joinGame());
    });
  };
}
