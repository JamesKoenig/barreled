export const followUser = userId =>
  $.ajax({
    url: `api/users/${userId}/follow`,
    method: "POST",
  });
