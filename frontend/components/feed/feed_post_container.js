import { connect } from 'react-redux';

import FeedPost from './feed_post';

const mapStateToProps = ({entities: { posts, users }},
                         { post_id, user_id }) => ({
  post: posts[post_id],
  author: users[user_id],
});

export default connect(mapStateToProps)(FeedPost);

