import { RECEIVE_USERS } from '../../actions/users';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USERS:
      return Object.assign({},oldState,action.users);
    default:
      return oldState;
  }
}
