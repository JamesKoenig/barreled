import { connect } from "react-redux";

import FeedLike from "./feed_like";

const mapStateToProps = (
  {
    entities: {
      posts,
      users
    }
  }, {
    postId,
    userId,
  }
) => ({
  user: users[userId],
  post: posts[postId],
});

export default connect(mapStateToProps)(FeedLike);
