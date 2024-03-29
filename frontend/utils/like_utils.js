export const likePost = postId =>
  $.ajax({
    url: `api/posts/${postId}/like`,
    method: "POST",
  });

export const unlikePost = postId =>
  $.ajax({
    url: `api/posts/${postId}/like`,
    method: "DELETE",
  });

export const fetchLikes = () =>
  $.ajax({
    url: "api/likes",
  });
