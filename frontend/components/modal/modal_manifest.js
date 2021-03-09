import NewPostForm  from '../posts/new_post_form_container';
import EditPostForm from '../posts/edit_post_form_container';

export default new Proxy({
    "newPost":    NewPostForm,
    "editPost":   EditPostForm,
  }, (obj, key) =>
      obj.hasOwnProperty(key) ? obj[key] : null
);
