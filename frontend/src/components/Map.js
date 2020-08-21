import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { useSelector } from "react-redux";

const Map = () => {
  const location = useSelector(({ location }) => location);

  if (!location.curLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...location.curLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={location.curLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)" // Border
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      <Polyline coordinates={location.locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
