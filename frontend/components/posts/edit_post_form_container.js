import { connect } from 'react-redux';
import   PostForm  from 'post-form';
im

const mSTP = (state,routerProps) => ({
  body: state.posts[routerProps.match.params.postId],
  fromType: 'Edit Post'
})

iconst mDTP = dispatch => ({
  action: post => {}
})

export default connect(mSTP,mDTP)(PostForm);

