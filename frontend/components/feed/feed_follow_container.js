import { connect } from "react-redux";

import FeedFollow from "./feed_follow";

const mapStateToProps = (
  {
    entities: {
      users
    }
  },
  {
    userId,
  }
) => ({
  follower: users[userId],
});

export default connect(mapStateToProps)(FeedFollow);
