json.key_format! camelize: :lower

json.posts do
  json.set! @post.id do
    json.extract! @post, :id, :body, :author_id, :total_likes
    json.isLiked  @post.post_liked
    json.dateTime @post.created_at
  end
end

json.users do
  json.set! @post.author_id do
    json.extract! @post.author, :id, :username
  end
end

json.timeStamps do
  json.time @post.created_at.to_i
  json.id   @post.id
end
