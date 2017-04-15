import { 
  CREATE_GAME_REQUEST, 
} from '../actions/';

const initialState = { 
  link: '',
};

const lobby = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GAME_REQUEST:
      return state;
    default:
      return state;
  }
};

export default lobby;