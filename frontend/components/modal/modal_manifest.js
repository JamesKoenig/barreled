import NewPostForm  from "../posts/new_post_form_container";
import EditPostForm from "../posts/edit_post_form_container";

export default new Proxy(
  {
    "newPost":    NewPostForm,
    "editPost":   EditPostForm,
  }, (obj, key) =>
  /* if this breaks, refer to this post:
   * https://stackoverflow.com/questions/39282873/how-do-i-access-the-object-prototype-method-in-the-following-logic/39283005#39283005
   * if that post no longer exists, make sure Object isn't being shadowed or
   *   its methods redefined
   */
    Object.prototype.hasOwnProperty.call(obj,key) ? obj[key] : null
);
