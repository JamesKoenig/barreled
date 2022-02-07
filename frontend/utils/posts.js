export const fetchPost = postId =>
  $.ajax({
    url: `api/posts/${postId}`,
  });

export const postPost = postData =>
  $.ajax({
    url: "/api/posts/",
    method: "POST",
    data: postData,
  });

export const patchPost = post =>
  $.ajax({
    url: `api/posts/${post.id}`,
    method: "PATCH",
    data: postData,
  });

export const deletePost = postId =>
  $.ajax({
    url: `api/posts/${postId}`,
    method: "DELETE",
  });

export const fetchPosts = () =>
  $.ajax({
    url: "api/posts/",
  });
