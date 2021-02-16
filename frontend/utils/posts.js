export const fetchPost = postId => (
  $.ajax({
    url: `api/posts/${postId}`
  })
);

