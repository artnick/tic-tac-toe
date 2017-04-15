import { 
  CONNECT_GAME_SUCCESS, 
} from '../actions/gameActions';

const initialState = { 
  field: [], 
  info: '',
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_GAME_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default game;
