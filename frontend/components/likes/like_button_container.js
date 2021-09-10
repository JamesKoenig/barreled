import { connect } from 'react-redux';
import { toggleLike } from '../../actions/like_actions';

import LikeButton from './like_button';

const mSTP = ({ entities: { posts } }, { postId } ) => {
  return {
  isLiked: posts[postId] ? posts[postId].isLiked : false,
}};

const mDTP = {
  toggleLike,
};

const mergeProps = ( stateProps, dispProps, ownProps ) => {
  const { isLiked } = stateProps;
  const { toggleLike: dispToggleLike } = dispProps;
  const { postId } = ownProps;

  // if more dispatch props are needed than toggleLike, add ...dispProps below
  //   but before the toggleLike assignment
  return ({
    ...ownProps,
    ...stateProps,
    toggleLike: () => dispToggleLike(postId, isLiked),
  })
};

export default connect(mSTP, mDTP, mergeProps)(LikeButton);
