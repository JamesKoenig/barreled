import {
  RECEIVE_FOLLOW_ERROR,
  CLEAR_FOLLOW_ERROR,
} from "../actions/follow_actions";

export default ( state = null, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FOLLOW_ERROR:
      return action.error;
    case CLEAR_FOLLOW_ERROR:
      return null;
    default:
      return state;
  }
};
