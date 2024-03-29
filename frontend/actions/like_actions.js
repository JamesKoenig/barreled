import {
  likePost,
  unlikePost,
} from "../utils/like_utils";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE  = "REMOVE_LIKE";
export const LIKE_ERROR   = "LIKE_ERROR";

const receiveLike = posts => ({
  type: RECEIVE_LIKE,
  posts,
});

const removeLike = posts => ({
  type: REMOVE_LIKE,
  posts,
});

const likeError = err => ({
  type: LIKE_ERROR,
  err,
});

const handleLikeError = err => dispatch => {
  //this is for debugging right now
  // in lieu of proper error handling in ui
  console.log(err.responseJSON);
  dispatch(likeError(err));
};

export const like = postId => dispatch =>
  likePost(postId)
    .then(
      ({ posts }) =>
        dispatch(receiveLike(posts)),
      error =>
        dispatch(handleLikeError(error))
    );

export const unlike = postId => dispatch =>
  unlikePost(postId)
    .then(
      ({ posts }) => dispatch(removeLike(posts)),
      error => dispatch(handleLikeError(error))
    );

export const toggleLike = (postId, isLiked ) => dispatch =>
  dispatch( isLiked ? unlike(postId) : like(postId) );
