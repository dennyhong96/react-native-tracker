import { LIST_TRACKS, CREATE_TRACK } from "../actions/actionTypes";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_TRACKS:
      return payload;
    case CREATE_TRACK:
      return [payload, ...state];
    default:
      return state;
  }
};
