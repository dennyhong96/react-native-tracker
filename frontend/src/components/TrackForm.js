import React, { Fragment, useState } from "react";
import { Input, Button, Text } from "react-native-elements";
import { startRecording, stopRecording } from "../redux/actions/location";
import { useDispatch, useSelector } from "react-redux";

import Spacer from "./Spacer";

const TrackForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const location = useSelector(({ location }) => location);

  return (
    <Fragment>
      <Spacer>
        {location.isRecording ? (
          <Spacer>
            <Text>
              Recording for track: {location.trackName || "Unnamed Track"}
            </Text>
          </Spacer>
        ) : (
          <Input
            disabled={location.isRecording}
            placeholder="Enter Track Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        )}
        <Button
          title={location.isRecording ? "Stop Recording" : "Start Recording"}
          onPress={() =>
            dispatch(
              location.isRecording ? stopRecording() : startRecording(name)
            )
          }
        />
      </Spacer>
    </Fragment>
  );
};

export default TrackForm;
