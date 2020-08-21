import {
  USER_SIGNED_IN,
  USER_SIGNED_UP,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERR_MSG,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: null,
  token: null,
  errMsg: "",
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_SIGNED_IN:
    case USER_SIGNED_UP:
      return { ...INITIAL_STATE, isAuthenticated: true, token: payload };
    case USER_LOADED:
      return { ...state, isAuthenticated: true, user: payload };
    case AUTH_ERROR:
      return { ...INITIAL_STATE, errMsg: payload };
    case CLEAR_ERR_MSG:
      return { ...state, errMsg: "" };
    default:
      return state;
  }
};
