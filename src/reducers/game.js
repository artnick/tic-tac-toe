import { 
  CONNECT_GAME_SUCCESS,
  CONNECT_GAME_FAILURE,
  RESTART_GAME,
  OPPONENT_DISCONNECTED,
  MOVED,
  YOUR_WIN,
  YOUR_LOST,
  DRAW,
} from '../actions/gameActions';
import { X, EMPTY } from '../constants/gameConstants';

const TEXT_CAN_MOVE = 'Your move';
const TEXT_CAN_NOT_MOVE = 'Your opponent move';
const TEXT_WIN = 'You win';
const TEXT_LOST = 'You lost';
const TEXT_DRAW = 'Draw';

function updateCell(array, action) {
  return array.map( (value, index) => {
    if(index !== action.index) {
      return value;
    }
    return action.sign;    
  });
}

const initialState = { 
  field: [], 
  player: 0,
  canMove: false,
  info: '',
  line: -1,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_GAME_SUCCESS:
      return {
        ...state,
        field: action.field,
        player: action.player,
        canMove: action.player == X,
        info: action.player == X ? TEXT_CAN_MOVE : TEXT_CAN_NOT_MOVE,
      };
    case CONNECT_GAME_FAILURE:
      return {
        ...state,
        info: action.message,
      };
    case RESTART_GAME:
      return {
        ...state,
        field: new Array(9).fill(EMPTY),
        canMove: state.player == X,
        info: state.player == X ? TEXT_CAN_MOVE : TEXT_CAN_NOT_MOVE,
        line: -1,
      };
    case OPPONENT_DISCONNECTED:
      return {
        ...state,
        info: 'Your opponent have left game',
      };
    case MOVED:
      return {
        ...state,
        field: updateCell(state.field, action),
        canMove: !state.canMove,
        info: !state.canMove ? TEXT_CAN_MOVE : TEXT_CAN_NOT_MOVE,
      };
    case YOUR_WIN:
      return {
        ...state,
        canMove: false,
        info: TEXT_WIN,
        line: action.line,
      };
    case YOUR_LOST:
      return {
        ...state,
        canMove: false,
        info: TEXT_LOST,
        line: action.line,
      };
    case DRAW:
      return {
        ...state,
        canMove: false,
        info: TEXT_DRAW,
      };
    default:
      return state;
  }
};

export default game;
