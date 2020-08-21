import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";

import { useDispatch, useSelector } from "react-redux";
import { listTracks } from "../redux/actions/tracks";

const TrackListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const tracks = useSelector(({ tracks }) => tracks);

  useEffect(() => {
    dispatch(listTracks());
  }, []);

  navigation.setOptions({
    title: "Tracks",
  });

  return (
    <View>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("TrackDetail", { id: item._id })}
          >
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
