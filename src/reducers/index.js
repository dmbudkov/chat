import { combineReducers } from "redux";
import auth from "./auth";
import chats from "./chats";
import services from "./services";

export default combineReducers({
  auth,
  chats,
  services
});