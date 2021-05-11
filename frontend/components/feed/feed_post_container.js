import { connect } from 'react-redux';

import FeedPost from './feed_post';

import { getPost } from '../../actions/posts';

const mapStateToProps = ({entities: { posts, users }},
                         { post_id, user_id }) => ({
  post: posts[post_id],
  author: users[user_id],
});


const mapDispatchToProps = (dispatch,{post_id}) => ({
  getOwnPost: () => dispatch(getPost(post_id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(FeedPost);

