import { connect } from 'react-redux';
import { toggleLike } from '../../actions/like_actions';

import LikeButton from './like_button';

const mDTP = {
  toggleLike,
};

const mergeProps = ( _, dispProps, ownProps ) => {
  const { toggleLike: dispToggleLike } = dispProps;
  const { id: postId, isLiked } = ownProps.post;

  // if more dispatch props are needed than toggleLike, add ...dispProps below
  //   but before the toggleLike assignment
  return ({
    ...ownProps,
    isLiked,
    postId,
    toggleLike: () => dispToggleLike(postId, isLiked),
  })
};

export default connect(null, mDTP, mergeProps)(LikeButton);
