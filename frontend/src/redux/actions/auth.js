import AsyncStorage from "@react-native-community/async-storage";

import {
  USER_SIGNED_IN,
  USER_SIGNED_UP,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERR_MSG,
  FINISH_LOCAL_TOKEN_LOADING,
  USER_LOG_OUT,
} from "./actionTypes";

import trackerApi from "../../api/tracker";

export const signup = (formData) => async (dispatch) => {
  try {
    const res = await trackerApi.post("/auth/signup", formData);
    await AsyncStorage.setItem("JWT_TOKEN", res.data.data.token);
    dispatch({
      type: USER_SIGNED_UP,
      payload: res.data.data.token,
    });
  } catch (error) {
    // console.error(error);
    dispatch({
      type: AUTH_ERROR,
      payload: "Something went wrong signign up",
    });
  }
};

export const signin = (formData) => async (dispatch) => {
  try {
    const res = await trackerApi.post("/auth/login", formData);
    await AsyncStorage.setItem("JWT_TOKEN", res.data.data.token);
    dispatch({
      type: USER_SIGNED_IN,
      payload: res.data.data.token,
    });
  } catch (error) {
    // console.error(error);
    dispatch({
      type: AUTH_ERROR,
      payload: "Something went wrong signign in.",
    });
  }
};

export const clearErrMsg = () => (dispatch) => {
  dispatch({ type: CLEAR_ERR_MSG });
};

export const localSignin = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("JWT_TOKEN");
  if (token) {
    dispatch({ type: USER_SIGNED_IN, payload: token });
  }
  dispatch({ type: FINISH_LOCAL_TOKEN_LOADING });
};

export const signout = () => async (dispatch) => {
  await AsyncStorage.removeItem("JWT_TOKEN");
  dispatch({ type: USER_LOG_OUT });
};
