import { connect } from 'react-redux';
import { toggleLike } from '../../actions/like_actions';

import LikeButton from './like_button';

const mDTP = ( dispatch, { postId, isLiked } ) => ({
  toggleLike: () => dispatch(toggleLIke(postId, isLiked)),
});

const mergeProps = ( _, dispProps, ownProps ) => {
  const { isLiked, postId } = ownProps;
  const dispToggleLike = dispProps.toggleLike;

  // if more dispatch props are needed than toggleLike, add ...dispProps below
  return ({
    ...ownProps,
    toggleLike: () => dispToggleLike(postId, isLiked),
  })
};

export default connect(null, mDTP, mergeProps)(LikeButton);
