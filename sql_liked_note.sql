--note to myself on an sql query for use in finding a user's likes
SELECT
  posts.id,
  posts.body, --FIXME for heuristics, not needed in final
  likes.user_id IS NOT NULL
    AS "liked"
FROM
  posts
LEFT OUTER JOIN
  likes ON
    posts.id = likes.post_id
WHERE
    --only include likes by the user we're looking for
    likes.user_id = 1
  OR
    --include all the posts that the user hasn't liked, though
    likes.user_id IS NULL 
LIMIT 3;
