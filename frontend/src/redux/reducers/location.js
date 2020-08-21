import {
  RECORDING_STARTED,
  RECORDING_STOPPED,
  LOCATION_ADDED,
} from "../../redux/actions/actionTypes";

const INITIAL_STATE = {
  isRecording: false,
  locations: [],
  curLocation: null,
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
    default:
      return state;
  }
};
