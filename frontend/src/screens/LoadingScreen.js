import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { localSignin } from "../redux/actions/auth";
import { View } from "react-native";

const LoadingScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(localSignin());
  }, []);
  return <View style={{ flex: 1 }}></View>;
};

export default LoadingScreen;
