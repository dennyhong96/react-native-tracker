import { SET_LOADING, CLEAR_LOADING } from "./actionTypes";

export const startLoading = () => (dispatch) => {
  dispatch({ type: SET_LOADING });
};

export const endLoading = () => (dispatch) => {
  dispatch({ type: CLEAR_LOADING });
};
