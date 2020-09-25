import { initialState } from './InitialState';
import * as actions from './Actions';

const reducer = (state = { user: initialState.user, loggedIn: initialState.loggedIn }, action) => {
  console.log(action);
  switch (action.type) {
    case actions.SET_USER_DATA:
      return {
        ...state,
        user: action.payload
      };
    case actions.LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload
      };
    case actions.LOGGED_OUT:
      return {
        ...state,
        loggedIn: action.payload
      };     
    default:
      return state;
  }
};

export default reducer;