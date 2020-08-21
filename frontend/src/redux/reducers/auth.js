import {
  USER_SIGNED_IN,
  USER_SIGNED_UP,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERR_MSG,
  FINISH_LOCAL_TOKEN_LOADING,
  USER_LOG_OUT,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: null,
  token: null,
  errMsg: "",
  loadingLocalToken: true,
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
      return { ...INITIAL_STATE, loadingLocalToken: false, errMsg: payload };
    case USER_LOG_OUT:
      return { ...INITIAL_STATE, loadingLocalToken: false };
    case CLEAR_ERR_MSG:
      return { ...state, errMsg: "" };
    case FINISH_LOCAL_TOKEN_LOADING:
      return { ...state, loadingLocalToken: false };
    default:
      return state;
  }
};
