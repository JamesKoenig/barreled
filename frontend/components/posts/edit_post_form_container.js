import { connect } from "react-redux";
import   PostForm  from "./post_form";
import { withRouter } from "react-router";
import { closeModal } from "../../actions/modal";
import { updatePost } from "../../actions/posts";

const mSTP = ({ entities: { posts },
                errors: { post: errors }},
              { misc: postId }) => ({
  errors,
  body: posts[postId].body,
  id: postId,
  formType: "Edit Post"
});

const mDTP = {
  action: updatePost,
  closeModal,
};

export default withRouter(connect(mSTP,mDTP)(PostForm));
