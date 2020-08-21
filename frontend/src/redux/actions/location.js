import {
  RECORDING_STARTED,
  RECORDING_STOPPED,
  LOCATION_ADDED,
  LOCATION_CHANGED,
  CLEAR_LOCATION,
  TRACKNAME_CHANGED,
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
  });
};

export const stopRecording = () => (dispatch) => {
  dispatch({
    type: RECORDING_STOPPED,
  });
};

export const clearLocation = () => (dispatch) => {
  dispatch({
    type: CLEAR_LOCATION,
  });
};

export const setTrackName = (trackName) => (disptach) => {
  disptach({
    type: TRACKNAME_CHANGED,
    payload: trackName,
  });
};
