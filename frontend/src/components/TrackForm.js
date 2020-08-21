import React, { Fragment, useState } from "react";
import { Input, Button, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";

import {
  startRecording,
  stopRecording,
  setTrackName,
} from "../redux/actions/location";
import { createTrack } from "../redux/actions/tracks";
import Spacer from "./Spacer";

const TrackForm = () => {
  const dispatch = useDispatch();
  const location = useSelector(({ location }) => location);
  const navigation = useNavigation();

  return (
    <Fragment>
      <Spacer>
        <Input
          disabled={
            location.isRecording ||
            (!location.isRecording && !!location.locations.length)
          }
          placeholder="Enter Track Name"
          value={location.trackName}
          onChangeText={(text) => dispatch(setTrackName(text))}
        />
        <Button
          title={location.isRecording ? "Stop Recording" : "Start Recording"}
          onPress={() =>
            dispatch(location.isRecording ? stopRecording() : startRecording())
          }
        />
        <Spacer />
        {!location.isRecording && !!location.locations.length && (
          <Button
            title={`Save ${location.trackName}`}
            onPress={() =>
              dispatch(createTrack(() => navigation.navigate("TrackList")))
            }
          />
        )}
      </Spacer>
    </Fragment>
  );
};

export default TrackForm;
