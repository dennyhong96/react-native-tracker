import {
  RECORDING_STARTED,
  RECORDING_STOPPED,
  LOCATION_ADDED,
} from "./actionTypes";

export const addLocation = (location) => (dispatch) => {
  dispatch({
    type: LOCATION_ADDED,
    payload: location,
  });
};

export const startRecording = () => (dispatch) => {
  dispatch({
    type: RECORDING_STARTED,
  });
};

export const stopRecording = () => (dispatch) => {
  dispatch({
    type: RECORDING_STOPPED,
  });
};
