import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

import { signup } from "../redux/actions/auth";
import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);

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
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>Already have an account? Sign in.</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  link: {
    color: "blue",
  },
});

export default SignupScreen;
