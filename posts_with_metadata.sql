SELECT
  posts.created_at    AS post_created_timestamp,
  posts.id            AS post_id,
  posts.body          AS post_body,
  authors.id          AS author_id,--technically uneccessary vs posts.author_id
  authors.username    AS author_username,
  attachments.blob_id AS blob_id,
  blobs.filename      AS blob_filename
FROM
  posts
INNER JOIN -- all posts have authors
  users AS authors ON
    authors.id = posts.author_id
LEFT OUTER JOIN -- not all posts have attachments
  active_storage_attachments AS attachments ON
      attachments.record_type = 'Post'  --must be a post
    AND
      attachments.name        = 'photo' --must be a photo
    AND
      attachments.record_id   = posts.id
LEFT OUTER JOIN
  active_storage_blobs AS blobs ON
    blobs.id = attachments.blob_id
ORDER BY
  post_created_timestamp DESC
LIMIT 15;
