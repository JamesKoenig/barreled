import { connect } from "react-redux";

import FeedPost from "./feed_post";

const mapStateToProps = ({entities: { posts, users }},
                         { postId, userId }) => ({
  post: posts[postId],
  author: users[userId],
});

export default connect(mapStateToProps)(FeedPost);

