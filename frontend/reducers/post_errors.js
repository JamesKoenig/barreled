import {
  RECEIVE_POST_ERRORS,
  CLEAR_POST_ERRORS,
  RECEIVE_POST_NOT_FOUND,
} from "../actions/post_errors";

export default ( state = [], action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST_ERRORS:
      return action.errors;
    case RECEIVE_POST_NOT_FOUND:
      return ["404"];
    case CLEAR_POST_ERRORS:
      return [];
    default:
      return state;
  }
};
