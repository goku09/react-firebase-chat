import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk, logger));
export default store;
