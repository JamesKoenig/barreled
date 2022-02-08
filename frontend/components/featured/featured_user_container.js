import { connect } from "react-redux";
import FeaturedUser from "./featured_user";
import {
  toggleFollow,
  fetchFollowState,
} from "../../actions/follow_actions";

const mSTP = (state, {userId} ) => ({
  user: state.entities.users[userId],
});

const mDTP = (dispatch, {userId}) => ({
  fetchFollowState:
    () =>
      dispatch(fetchFollowState(userId)),
  toggleFollow:
    isFollowed =>
      dispatch(toggleFollow(isFollowed,userId)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isFollowed = stateProps.user ? stateProps.user.isFollowed : undefined;
  const { toggleFollow: dispToggleFollow } = dispatchProps;

  return ({
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    toggleFollow:
      () =>
        dispToggleFollow(isFollowed),
  });
};

export default connect(mSTP,mDTP,mergeProps)(FeaturedUser);
