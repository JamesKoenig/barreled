class CreateNotificationView < ActiveRecord::Migration[5.2]
  def change
    create_view :notifications, <<~SQL
          SELECT
            follows.updated_at,
            follows.follower_id AS who,
            'follow' AS "action",
            follows.followed_id AS user_id,
            null as post_id
          FROM
            follows
        UNION ALL
          SELECT
            likes.updated_at,
            likes.user_id,
            'like',
            posts.author_id,
            likes.post_id
          FROM
            likes
          JOIN
            posts ON
              likes.post_id = posts.id
    SQL
  end
end
