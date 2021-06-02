import {
  likePost,
  unlikePost,
} from '../utils/like_utils';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE  = 'REMOVE_LIKE';

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like,
})

const removeLike = postId => ({
  type: REMOVE_LIKE,
  like, 
})

export const like = postId => dispatch =>
  likePost(postId)
    .then( like =>
      dispatch(receiveLike(like)))
    .catch( error =>
      console.log(error));

export const unlike = postId => dispatch =>
  unlikePost(postId)
    .then( like =>
      dispatch(removeLike(like)))
    .catch( error =>
      console.error(error));
