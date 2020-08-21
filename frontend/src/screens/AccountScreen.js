import React from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native";

import Spacer from "../components/Spacer";
import { signout } from "../redux/actions/auth";

const AccountScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign out" onPress={() => dispatch(signout())} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
