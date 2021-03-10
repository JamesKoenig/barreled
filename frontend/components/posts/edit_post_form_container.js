import { connect } from 'react-redux';
import   PostForm  from './post_form';
import { withRouter } from 'react-router';

const mSTP = ({entities: { posts }},{match: {params: { postId } } }) => {
  return ({
  body: posts[postId].body,
  formType: 'Edit Post'
}) }

const mDTP = dispatch => ({
  action: post => {}
})

export default withRouter(connect(mSTP,mDTP)(PostForm));

