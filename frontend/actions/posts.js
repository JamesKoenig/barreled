import { fetchPost,
         fetchFeed } from '../utils/posts';
import { receiveUsers } from './users';

export const RECEIVE_POSTS = "RECEIVE_POSTS"

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const getFeed = () => dispatch =>
  fetchFeed()
    .then( ({ posts, users }) => (
      [ dispatch(receivePosts(posts)),
        dispatch(receiveUsers(users)) ])
    )

export const getPost = postId => dispatch =>
  fetchPost(postId)
    .then( ({ posts, users }) => (
      [ dispatch(receivePosts(posts)),
        dispatch(receiveUsers(users)) ])
    )

