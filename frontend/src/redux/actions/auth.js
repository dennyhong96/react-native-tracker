import AsyncStorage from "@react-native-community/async-storage";

import {
  USER_SIGNED_IN,
  USER_SIGNED_UP,
  USER_LOADED,
  AUTH_ERROR,
} from "./actionTypes";

import trackerApi from "../../api/tracker";

export const signup = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    const res = await trackerApi.post("/auth/signup", formData);
    await AsyncStorage.setItem("JWT_TOKEN", res.data.data.token);
    dispatch({
      type: USER_SIGNED_UP,
      payload: res.data.data.token,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Something went wrong signign up",
    });
  }
};
