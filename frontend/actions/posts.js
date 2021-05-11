import { fetchPost } from '../utils/posts';
import { receiveUsers } from './users';

export const RECEIVE_POSTS = "RECEIVE_POSTS"

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const getPost = postId => dispatch =>
  fetchPost(postId)
    .then( ({ posts, users, timeStamps }) => {
      dispatch(receivePosts(posts));
      dispatch(receiveUsers(users));
    })

