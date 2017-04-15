import { combineReducers } from 'redux';
import game from './game';
import lobby from './lobby';

const reducer = combineReducers({
  game,
  lobby,
});

export default reducer;