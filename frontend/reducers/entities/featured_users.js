import {
  RECEIVE_FEATURED_USERS,
} from "../../actions/featured_users_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_FEATURED_USERS:
      // break omitted: purposeful fall-through placeholder
    default:
      return oldState;
  }
};
