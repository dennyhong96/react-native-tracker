import React, { Fragment, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ title, errMsg, onSubmit, submitBtnText }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  return (
    <Fragment>
      <Spacer>
        <Text h3>{title}</Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        value={email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
      />
      <Spacer />
      <Input
        secureTextEntry // Hide Password
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        value={password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
      />
      {!!errMsg && <Text style={styles.errMsg}>{errMsg}</Text>}
      <Spacer>
        <Button title={submitBtnText} onPress={() => onSubmit(form)} />
      </Spacer>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  errMsg: {
    fontSize: 15,
    color: "red",
    marginLeft: 15,
    // marginTop: 15,
  },
});

export default AuthForm;
