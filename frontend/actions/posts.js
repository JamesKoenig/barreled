import {
  fetchPost,
  postPost,
  patchPost,
  deletePost,
} from "../utils/posts";
import { receiveUsers } from "./users";
import * as post_errors from "./post_errors";

const {
  receivePostErrors:   receiveErrors,
  clearPostErrors:     clearErrors,
  receivePostNotFound: postNotFoundError,
} = post_errors;

export const RECEIVE_POSTS       = "RECEIVE_POSTS";
export const REMOVE_POST         = "REMOVE_POST";


/* has to be exported since the feed actions also use this reducer payload */
export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const dispRemovePost = postId => ({
  type: REMOVE_POST,
  postId,
});

export const getPost = postId => dispatch =>
  fetchPost(postId)
    .then( ({ posts, users }) => {
      dispatch(receivePosts(posts));
      dispatch(receiveUsers(users));
    }, () =>
      dispatch(postNotFoundError())
    );

/* this pattern could technically be used for the other actions as well,
 *   but I didn't want to vague-up the argument type (post vs postId)
 *   since I felt like a function signature like
 *     utilAction => argument => dispatch
 *   might make debugging a pain in the ass later, so this is only used
 *   for create & update.
 */
const postAction = utilAction => post => dispatch =>
  utilAction(post)
    .then( ({ posts, users }) => {
      dispatch(receivePosts(posts));
      dispatch(receiveUsers(users));
    })
    .then(
      () => dispatch(clearErrors()),
      error => dispatch(receiveErrors(error.responseJSON))
    );

export const createPost = postAction(postPost);
export const updatePost = postAction(patchPost);

export const removePost = postId => dispatch =>
  deletePost(postId)
    .then( () => {
      /* I could technically do
       *   Object.keys(posts)[0]
       * but that looks ugly & we already know we were successful since
       * we're in a then
       */
      dispatch(dispRemovePost(postId));
    });
