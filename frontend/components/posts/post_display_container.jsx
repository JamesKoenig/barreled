import { connect }    from 'react-redux';
import  PostDisplay   from './post_display';
import { withRouter } from 'react-router';

import { getPost }  from '../../actions/posts';
import { clearPostErrors } from '../../actions/post_errors';

const mSTP = ( { entities: { posts, users },
                 errors: { post: postErrors } },
               { match: { params: { postId } } } ) => {

  let post   = posts[postId];
  let author = post ? users[post.authorId] : {};
  let notFound = postErrors.length > 0 ? postErrors[0] === "404" : false
  return { post, author, postId, notFound };
};

const mDTP = dispatch => ({
  getPost: postId => dispatch(getPost(postId)),
  clearPostErrors: () => dispatch(clearPostErrors()),
})


export default withRouter(connect(mSTP,mDTP)(PostDisplay));
