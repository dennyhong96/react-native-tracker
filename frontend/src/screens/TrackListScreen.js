import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { listTracks } from "../redux/actions/tracks";

const TrackListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTracks());
  }, []);

  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
