export const fetchPost = postId =>
  $.ajax({
    url: `api/posts/${postId}`,
  })

export const postPost = post =>
  $.ajax({
    url: '/api/posts/',
    method: 'POST',
    data: { post },
  });

export const patchPost = post =>
  $.ajax({
    url: `api/posts/${post.id}`,
    method: 'PATCH',
    data: { post },
  })

export const deletePost = postId =>
  $.ajax({
    url: `api/posts/${postId}`,
    method: 'DELETE',
  })

