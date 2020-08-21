import { SET_LOADING, CLEAR_LOADING } from "../actions/actionTypes";

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case SET_LOADING:
      return true;
    case CLEAR_LOADING:
      return false;
    default:
      return state;
  }
};
