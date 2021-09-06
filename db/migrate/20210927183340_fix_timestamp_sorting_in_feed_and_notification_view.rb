class FixTimestampSortingInFeedAndNotificationView < ActiveRecord::Migration[5.2]
  def change
    drop_view :feeds
    drop_view :notifications

    sleep 2

    create_view :notifications, <<~SQL
        SELECT
          follows.created_at,
          follows.follower_id AS "who",
          'follow' AS "action",
          follows.followed_id AS user_id,
          null AS post_id
        FROM
          follows
        WHERE
          follows.hidden = false
      UNION ALL
        SELECT
          likes.created_at,
          likes.user_id,
          'like',
          posts.author_id,
          likes.post_id
        FROM
          likes
        INNER JOIN
          posts ON
            likes.post_id = posts.id
    SQL

    create_view :feeds, <<~SQL
        SELECT
          posts.created_at,
          posts.author_id AS "who",
          'post' AS "action",
          follows.follower_id AS user_id,
          posts.id as post_id
        FROM
          posts
        INNER JOIN 
          users ON
            posts.author_id = users.id
        INNER JOIN
          follows ON
            users.id = follows.followed_id
      UNION ALL
        SELECT
          *
        FROM
          notifications
    SQL
  end
end
