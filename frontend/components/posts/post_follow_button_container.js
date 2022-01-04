import { connect } from 'react-redux';
import PostFollowButton from './post_follow_button';
import {
    toggleFollow,
    fetchFollowState,
} from '../../actions/follow_actions';

const mDTP = (dispatch, { authorId, isFollowed = false }) => ({
  fetchFollowState: () => dispatch(fetchFollowState(authorId)),
  //this could probably be improved somewhat
  toggleFollow: toggleFollow(isFollowed,authorId,dispatch),
})

export default connect(null,mDTP)(PostFollowButton);
