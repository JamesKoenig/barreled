export const followUser = userId =>
  $.ajax({
    url: `api/users/${userId}/follow`,
    method: "POST",
  });

export const unfollowUser = userId =>
  $.ajax({
    url: `api/users/${userId}/follow`,
    method: "DELETE",
  });
