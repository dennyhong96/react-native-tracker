import {
  RECORDING_STARTED,
  RECORDING_STOPPED,
  LOCATION_ADDED,
  LOCATION_CHANGED,
  CLEAR_LOCATION,
  TRACKNAME_CHANGED,
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
      return { ...state, isRecording: true };
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
    case TRACKNAME_CHANGED:
      return {
        ...state,
        trackName: payload,
      };
    case CLEAR_LOCATION:
      return { ...state, locations: [], trackName: "" };
    default:
      return state;
  }
};
