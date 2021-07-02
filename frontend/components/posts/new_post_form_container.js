import { connect } from 'react-redux';
import { createPost } from "../../actions/posts";
import  PostForm   from './post_form';

const mSTP = state => ({
  formType: "Create Post"
});

const mDTP = {
  action: createPost,
}

export default connect(mSTP,mDTP)(PostForm);
