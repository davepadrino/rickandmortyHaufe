import { combineReducers } from "redux";
import user from "./user";
import characters from "./characters";

export default combineReducers({ user, characters });
