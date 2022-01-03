import { RECEIVE_USERS } from '../../actions/users';
import { RECEIVE_FOLLOW_STATUS } from '../../actions/follow_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USERS:
      return Object.assign({},oldState,action.users);
    case RECEIVE_FOLLOW_STATUS:
      let res = Object.assign({}, oldState);

      const key = Object.keys(action.followStatus).pop()
      res[key] = {
        ...res[key],
        ...action.followStatus[key],
      }

      return res
    default:
      return oldState;
  }
}
