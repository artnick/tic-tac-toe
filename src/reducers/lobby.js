import { 
  CREATE_GAME_SUCCESS,
  JOIN_GAME,
} from '../actions/lobbyActions';

const initialState = { 
  gameId: '',
  canJoinGame: false,
};

const lobby = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GAME_SUCCESS:
      return {
        ...state,
        gameId: action.gameId,
      };
    case JOIN_GAME:
      return {
        ...state,
        canJoinGame: true,
      };
    default:
      return state;
  }
};

export default lobby;