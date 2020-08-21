import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import useOnRouteChange from "../hooks/useOnRouteChange";
import { signup, clearErrMsg } from "../redux/actions/auth";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);

  useOnRouteChange(() => dispatch(clearErrMsg()));

  navigation.setOptions({
    header: () => false,
  });

  return (
    <View style={styles.container}>
      <AuthForm
        title="Sign up for tracker"
        errMsg={auth.errMsg}
        submitBtnText="Sign up"
        onSubmit={(form) => dispatch(signup(form))}
      />
      <NavLink
        text="Already have an account? Sign in here."
        navigateTo="Signin"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
