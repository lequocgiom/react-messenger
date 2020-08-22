import { combineReducers } from "redux";
import profile from "./profile";
import twilio from "./twilio";
export default combineReducers({ profile, twilio });
