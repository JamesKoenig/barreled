import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER } from '../actions/session';

const _nullUser = {
  currentUserId: null
}

export default (oldState = _nullUser,  action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return oldState;
  }
}
