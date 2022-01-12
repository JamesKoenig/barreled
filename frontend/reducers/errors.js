import { combineReducers } from "redux";

import session from "./session_errors";
import post from "./post_errors";
import follow from "./follow_errors";

export default combineReducers({
  session,
  post,
  follow,
});
