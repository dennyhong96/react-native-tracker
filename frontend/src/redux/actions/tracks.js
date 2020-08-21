import trackerApi from "../../api/tracker";

import { clearLocation } from "./location";
import { LIST_TRACKS, CREATE_TRACK } from "../actions/actionTypes";

export const listTracks = () => async (dispatch) => {
  try {
    const res = await trackerApi.get("/tracks");
    console.log(res.data);
    dispatch({ type: LIST_TRACKS, payload: res.data.data.tracks });
  } catch (error) {
    console.error(error);
  }
};

export const createTrack = (callback) => async (dispatch, getState) => {
  try {
    const { location } = getState();
    const res = await trackerApi.post("/tracks", {
      name: location.trackName,
      locations: location.locations,
    });
    dispatch({ type: CREATE_TRACK, payload: res.data.data.track });
    dispatch(clearLocation());

    if (callback) {
      callback();
    }

    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
