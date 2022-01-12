import { combineReducers } from "redux";

import session  from "./session";
import errors   from "./errors";
import entities from "./entities";
import ui       from "./ui";

export default combineReducers({
  entities,
  session,
  ui,
  errors,
});
