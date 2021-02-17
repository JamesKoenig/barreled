import { connect }    from 'react-redux';
import  PostDisplay   from './post_display';
import { withRouter } from 'react-router';

import { getPost }  from '../../actions/posts';

const mSTP = ( { entities: { posts, users } },
               { match: { params: { postId } } } ) => {

  let post   = posts[postId];
  let author = post ? users[post.authorId] : {};
  return { post, author, postId };
};

const mDTP = dispatch => ({
  getPost: postId => dispatch(getPost(postId))
})


export default withRouter(connect(mSTP,mDTP)(PostDisplay));
