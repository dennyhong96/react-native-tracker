import {
  RECORDING_STARTED,
  RECORDING_STOPPED,
  LOCATION_ADDED,
  LOCATION_CHANGED,
} from "./actionTypes";

export const addLocation = (location) => (dispatch, getState) => {
  const state = getState();

  // DEV LOGS
  console.log({
    isRecording: state.location.isRecording,
    locations: state.location.locations.length,
  });

  if (state.location.isRecording) {
    dispatch({
      type: LOCATION_ADDED,
      payload: location,
    });
  } else {
    dispatch({
      type: LOCATION_CHANGED,
      payload: location,
    });
  }
};

export const startRecording = (trackName) => (dispatch) => {
  dispatch({
    type: RECORDING_STARTED,
    payload: trackName,
  });
};

export const stopRecording = () => (dispatch) => {
  dispatch({
    type: RECORDING_STOPPED,
  });
};
