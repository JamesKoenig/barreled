export const fetchPost = postId =>
  $.ajax({
    url: `api/posts/${postId}`,
  });

export const postPost = postData =>
  $.ajax({
    url: "/api/posts/",
    method: "POST",
    data: postData,
    contentType: false,
    processData: false,
  });

export const patchPost = postData =>
  $.ajax({
    url: `api/posts/${postData.get("post[id]")}`,
    method: "PATCH",
    data: postData,
    contentType: false,
    processData: false,
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
