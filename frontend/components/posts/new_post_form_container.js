import { connect } from 'react-redux';
import  PostForm   from './post_form';

const mSTP = state => ({
  formType: "Create Post"
});

const mDTP = dispatch => ({
  action: post => {}
})

export default connect(mSTP,mDTP)(PostForm);
