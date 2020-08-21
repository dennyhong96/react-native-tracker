import { combineReducers } from "redux";

import auth from "../reducers/auth";
import loading from "../reducers/loading";
import location from "../reducers/location";
import tracks from "../reducers/tracks";

export default combineReducers({ auth, loading, location, tracks });
