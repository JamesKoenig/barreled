import { connect } from 'react-redux';
import FeedItem from './feed_item';

const mSTP = ({ entities: { posts, users } }, { feedItem }) => {
  return {
  };
};

export default connect(mSTP)(FeedItem);
