import "../_mockLocation"; // Mock location change

import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { addLocation } from "../redux/actions/location";

import useLocation from "../hooks/useLocation";
import useOnRouteChange from "../hooks/useOnRouteChange";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [err] = useLocation(isFocused, (location) =>
    dispatch(addLocation(location))
  );

  return (
    <SafeAreaView>
      <Text h2>Create a track</Text>
      <Map />
      {!!err && <Text>Please enable location services.</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default TrackCreateScreen;
