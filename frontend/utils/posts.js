export const fetchPost = postId => (
  $.ajax({
    url: `api/posts/${postId}`
  })
);

export const fetchFeed = () => (
  $.ajax({
    url: 'api/posts/feed'
  })
);
