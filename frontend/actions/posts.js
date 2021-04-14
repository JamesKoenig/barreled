import { fetchPost,
         fetchFeed } from '../utils/posts';
import { receiveUsers } from './users';
import { receiveSortedFeed } from './feed';


export const RECEIVE_POSTS = "RECEIVE_POSTS"

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const getFeed = () => dispatch =>
  fetchFeed()
    .then( ({ posts, users, timeStamps }) => {
      dispatch(receivePosts(posts));
      dispatch(receiveUsers(users));
      dispatch(receiveSortedFeed(timeStamps));
    })

export const getPost = postId => dispatch =>
  fetchPost(postId)
    .then( ({ posts, users, timeStamps }) => {
      dispatch(receivePosts(posts));
      dispatch(receiveUsers(users));
      dispatch(receiveSortedFeed(timeStamps));
    })

