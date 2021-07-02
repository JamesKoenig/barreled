import { connect } from 'react-redux';
import { createPost } from "../../actions/posts";
import { closeModal } from "../../actions/modal"
import  PostForm   from './post_form';

const mSTP = ({errors: { post: errors }}) => ({
  errors,
  formType: "Create Post",
});

const mDTP = {
  action: createPost,
  closeModal,
}

export default connect(mSTP,mDTP)(PostForm);
