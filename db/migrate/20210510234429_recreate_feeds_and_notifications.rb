class RecreateFeedsAndNotifications < ActiveRecord::Migration[5.2]
  def change
    create_view :notifications, <<~SQL
          SELECT
            follows.updated_at,
            follows.follower_id AS "who",
            'follow' AS "action",
            follows.followed_id AS user_id,
            null as post_id
          FROM
            follows
          WHERE
            follows.hidden = false
        UNION ALL
          SELECT
            likes.updated_at,
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
          posts.updated_at,
          posts.author_id AS "who",
          'post' AS "action",
          follows.follower_id as user_id,
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
