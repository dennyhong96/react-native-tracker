import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { signin } from "../redux/actions/auth";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);

  navigation.setOptions({
    header: () => false,
  });

  return (
    <View style={styles.container}>
      <AuthForm
        title="Sign in"
        errMsg={auth.errMsg}
        submitBtnText="Sign in"
        onSubmit={(form) => dispatch(signin(form))}
      />
      <NavLink
        text="Don't have an account? Sign up here."
        navigateTo="Signup"
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

export default SigninScreen;
