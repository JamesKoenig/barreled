import { connect } from "react-redux";
import FollowButton from "./follow_button";
import {
  toggleFollow,
  fetchFollowState,
} from "../../actions/follow_actions";

const mSTP = ({entities: { users }}, {userId}) =>
  users[userId] ? ({
    isFollowed: users[userId].isFollowed,
    hiddenFollow: users[userId].hiddenFollow,
  }) : ({ });

const mDTP = (dispatch, { userId }) => ({
  fetchFollowState: () => dispatch(fetchFollowState(userId)),
  toggleFollow: isFollowed =>
    isFollowed !== null
      ? toggleFollow(isFollowed,userId,dispatch)
      : () => {}, //short-term: do nothing if isFollowed hasn't been fetched
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    toggleFollow: dispatchProps.toggleFollow(stateProps.isFollowed),
  }
}
export default connect(mSTP,mDTP)(FollowButton);
