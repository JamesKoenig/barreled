-- note on basic sql query that incorporates follows into a user query
-- this is very similar to the sql_liked_note
SELECT
    users.id,
    users.username,
    follows.follower_id IS NOT NULL
        AS "followed"
FROM
    users
LEFT OUTER JOIN
    follows ON
        follows.followed_id = users.id
WHERE
        follows.follower_id = 3
    OR
        follows.follower_id IS NULL
ORDER BY
    users.id ASC
