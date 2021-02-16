import { RECEIVE_POSTS } from '../../actions/posts';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_POSTS:
      return Object.assign({},oldState,action.posts);
    default:
      return oldState;
  }
}
