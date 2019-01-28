import {combineReducers} from "redux";
import loggedUserReducer from "./loggedUserReducer";
import homeReducer from "./homeReducer";

export const rootReducer = combineReducers({
  loggedUserState: loggedUserReducer,
  homeReducer: homeReducer,
});