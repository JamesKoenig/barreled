import { connect } from 'react-redux';
import PostFollowButton from './post_follow_button';
import {
    toggleFollow,
    fetchFollowState,
} from '../../actions/follow_actions';

const mDTP = (dispatch, { authorId, isFollowed }) => ({
  fetchFollowState: () => dispatch(fetchFollowState(authorId)),
})

export default connect(null,mDTP)(PostFollowButton);
