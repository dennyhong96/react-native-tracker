import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import rootReducer from "../redux/reducers/index";

const middlewares = [reduxThunk];

export default createStore(rootReducer, applyMiddleware(...middlewares));
