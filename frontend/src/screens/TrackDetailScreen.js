import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

const TrackDetailScreen = ({ route }) => {
  const tracks = useSelector(({ tracks }) => tracks);

  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackDetailScreen</Text>
      <Text>{tracks.find((track) => track._id === route.params.id).name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
