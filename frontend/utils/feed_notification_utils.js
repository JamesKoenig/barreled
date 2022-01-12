export const fetchFeed = () =>
  $.ajax({
    url: "api/feed"
  });

export const fetchNotifications = () =>
  $.ajax({
    url: "/api/notifications"
  });
