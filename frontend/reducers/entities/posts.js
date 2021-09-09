import { RECEIVE_POSTS } from '../../actions/posts';
import {
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from '../../actions/like_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_POSTS:
    case RECEIVE_LIKE:
    case REMOVE_LIKE:
      return Object.assign({},oldState,action.posts);
    default:
      return oldState;
  }
}
