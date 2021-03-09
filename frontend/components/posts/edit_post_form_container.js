import { connect } from 'react-redux';
import   PostForm  from './post_form';

const mSTP = (state,routerProps) => ({
  body: state.posts[routerProps.match.params.postId],
  fromType: 'Edit Post'
})

const mDTP = dispatch => ({
  action: post => {}
})

export default connect(mSTP,mDTP)(PostForm);

