import { combineReducers } from "redux";
import homeReducer from "./home/redux";

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;
