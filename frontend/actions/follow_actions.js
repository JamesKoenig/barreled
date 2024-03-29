import {
  followUser,
  unfollowUser,
  getFollowState,
} from "../utils/follow_utils";

export const RECEIVE_FOLLOW_ERROR  = "RECEIVE_FOLLOW_ERROR";
export const CLEAR_FOLLOW_ERROR    = "CLEAR_FOLLOW_ERROR";
export const RECEIVE_FOLLOW_STATUS = "RECEIVE_FOLLOW_STATUS";

const followError = error => ({
  type: RECEIVE_FOLLOW_ERROR,
  error,
});

const clearError  = () => ({
  type: CLEAR_FOLLOW_ERROR,
});

const followStatus = status => ({
  type: RECEIVE_FOLLOW_STATUS,
  followStatus: status,
});

export const clearFollowError = () => dispatch =>
  dispatch(clearError());

export const follow = userId => dispatch =>
  followUser(userId)
    .then(
      status => dispatch(followStatus(status)), //does js have fn composition?
      ({responseJSON: errors}) => dispatch(followError(errors[0]))
    );

export const unfollow = userId => dispatch =>
  unfollowUser(userId)
    .then(
      status => dispatch(followStatus(status)),
      ({responseJSON: errors}) =>
        dispatch(followError(errors[0]))
    );

export const fetchFollowState = userId => dispatch =>
  getFollowState(userId)
    .then(status => dispatch(followStatus(status)));

/* higher order function  that takes a bool, userid, and the redux dispatch,
 * and returns a nullary function that will unfollow (& dispatch)
 * a user if they're not followed, and follow them if they are
 *
 * should be instantiated every time the followState changes as part of
 *  mapDispatchToProps' default behavior.  so remember this if you change the
 *  didUpdate behavior
 */
export const toggleFollow = ( followState, userId, dispatch ) =>
  ( actionFn =>
    () =>
      dispatch(actionFn(userId))
  )(followState ? unfollow : follow);
