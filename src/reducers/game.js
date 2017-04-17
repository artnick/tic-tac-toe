import { 
  CONNECT_GAME_SUCCESS, 
} from '../actions/gameActions';

const initialState = { 
  field: [], 
  player: 0,
  canMove: false,
  info: '',
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_GAME_SUCCESS:
      return {
        ...state,
        field: action.field,
        player: action.player,
        canMove: action.canMove,
        info: action.info,
      };
    default:
      return state;
  }
};

export default game;
