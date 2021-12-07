import {
  followUser,
  unfollowUser,
} from '../utils/follow_utils';

export const RECEIVE_FOLLOW_ERROR = 'RECEIVE_FOLLOW_ERROR';
export const CLEAR_FOLLOW_ERROR   = 'CLEAR_FOLLOW_ERROR';

const followError = error => ({
  type: RECEIVE_FOLLOW_ERROR,
  error,
})

const clearError  = () => ({
  type: CLEAR_FOLLOW_ERROR,
})

export const clearFollowError = () => dispatch =>
  dispatch(clearError());

export const follow = userId => dispatch =>
  followUser(userId)
    .then(
      () => {},
      ({responseJSON: errors}) => dispatch(followError(errors[0]))
    )

export const unfollow = userId => dispatch =>
  unfollowUser(userId)
    .then(
      () => {},
      ({responseJSON: errors}) => {
        dispatch(followError(errors[0]))
      }
    )

export const toggleFollow = followState => userId => dispatch =>
  ( actionFn => actionFn(userId) )(followState ? unfollow : follow)
