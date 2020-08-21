import "../_mockLocation"; // Mock location change

import React, { useCallback } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { addLocation } from "../redux/actions/location";

import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const dispatch = useDispatch();
  const location = useSelector(({ location }) => location);
  const isFocused = useIsFocused();

  const callBack = useCallback((location) => dispatch(addLocation(location)), [
    location.isRecording,
  ]);

  const [err] = useLocation(isFocused || location.isRecording, callBack);

  return (
    <SafeAreaView>
      <Text h2>Create a track</Text>
      <Map />
      {!!err && <Text>Please enable location services.</Text>}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default TrackCreateScreen;
