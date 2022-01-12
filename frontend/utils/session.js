export const postUser = user =>
  $.ajax({
    url:    "api/users",
    method: "POST",
    data: { user }
  });

export const deleteUser = userId =>
  $.ajax({
    url:    `api/users/${userId}`,
    method: "DELETE",
  });

export const postSession = user =>
  $.ajax({
    url:    "api/session",
    method: "POST",
    data: { user }
  });

export const deleteSession = () =>
  $.ajax({
    url:    "api/session",
    method: "DELETE"
  });
