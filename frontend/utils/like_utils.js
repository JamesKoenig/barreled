export const likePost = postId =>
  $.ajax({
    url: `api/posts/${postId}/likes`,
    method: "POST",
  });

export const unlikePost = postId =>
  $.ajax({
    url: `api/posts/${postID}/likes`,
    method: "DELETE",
  });
