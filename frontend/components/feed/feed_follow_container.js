import { connect } from 'react-redux';

import FeedFollow from './feed_follow';

const mapStateToProps = (
  {
    entities: {
      users
    }
  },
  {
    user_id
  }
) => ({
  follower: users[user_id],
})

export default connect(mapStateToProps)(FeedFollow);
