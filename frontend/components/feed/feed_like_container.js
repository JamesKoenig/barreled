import { connect } from 'react-redux';

import FeedLike from './feed_like';

const mapStateToProps = ({
    entities: {
      posts,
      users
    }
  }, {
    post_id,
    user_id,
  }
) => ({
  user: users[user_id],
  post: posts[post_id],
})

export default connect(mapStateToProps)(FeedLike);
