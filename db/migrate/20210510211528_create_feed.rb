class CreateFeed < ActiveRecord::Migration[5.2]
  def change
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
          follows.updated_at,
          follows.follower_id,
          'follow',
          follows.followed_id,
          null
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
          posts
        INNER JOIN
          likes ON
            posts.id = likes.post_id
    SQL
  end
end
