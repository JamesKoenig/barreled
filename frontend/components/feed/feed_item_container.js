import { connect } from 'react-redux';
import FeedItem from './feed_item';

const mSTP = ({ entities: { posts, users } }, { feedItem }) => {
  const post = posts[feedItem.id]
  return {
    post,
    author: users[post.authorId],
  };
};

const mDTP = {
  getPost: () => {},
};

export default connect(mSTP,mDTP)(FeedItem);
