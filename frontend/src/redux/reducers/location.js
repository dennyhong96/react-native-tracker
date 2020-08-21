import {
  RECORDING_STARTED,
  RECORDING_STOPPED,
  LOCATION_ADDED,
  LOCATION_CHANGED,
} from "../../redux/actions/actionTypes";

const INITIAL_STATE = {
  isRecording: false,
  locations: [],
  curLocation: null,
  trackName: "",
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case RECORDING_STARTED:
      return { ...state, isRecording: true, trackName: payload };
    case RECORDING_STOPPED:
      return { ...state, isRecording: false };
    case LOCATION_ADDED:
      return {
        ...state,
        locations: [...state.locations, payload],
        curLocation: payload,
      };
    case LOCATION_CHANGED:
      return {
        ...state,
        curLocation: payload,
      };
    default:
      return state;
  }
};
