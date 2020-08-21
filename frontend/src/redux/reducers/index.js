import { combineReducers } from "redux";

import auth from "../reducers/auth";
import loading from "../reducers/loading";

export default combineReducers({ auth, loading });
