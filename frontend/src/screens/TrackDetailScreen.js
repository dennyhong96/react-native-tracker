import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import Spacer from "../components/Spacer";
import { useSelector } from "react-redux";

const TrackDetailScreen = ({ route }) => {
  const tracks = useSelector(({ tracks }) => tracks);

  const curTrack = tracks.find((track) => track._id === route.params.id);
  const initialCoords = curTrack.locations[0].coords;
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Track Detail</Text>
      <Spacer />
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={curTrack.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
