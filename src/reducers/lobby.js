import { 
  CREATE_GAME_SUCCESS, 
} from '../actions/';

const initialState = { 
  link: '',
};

const lobby = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GAME_SUCCESS:
      return {
        ...state,
        link: action.url,
      };
    default:
      return state;
  }
};

export default lobby;