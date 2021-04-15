import   React     from 'react';
import { connect } from 'react-redux';
import   Feed      from './feed';
import { logout  } from '../../actions/session.js';
import { getFeed } from '../../actions/posts.js';

const mSTP = ({entities: { feedEntities: { arr: feedItems }}}) => {
  return {
    feedItems,
  }
}

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  getFeed: () => dispatch(getFeed()),
});

export default connect(mSTP,mDTP)(Feed);
