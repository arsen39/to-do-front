import { combineReducers } from "redux";
import taskReducer from "./tasks/reducer"

export default combineReducers({ taskReducer });