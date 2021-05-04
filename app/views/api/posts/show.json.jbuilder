json.posts do
  json.set! @post.id do
    json.extract! @post, :id, :body
    json.authorId @post.author_id
    json.dateTime @post.created_at
  end
end

json.users do
  json.set! @post.author_id do
    json.extract! @post.author, :id, :username
  end
end

json.timeStamps do
  json.time @post.updated_at.to_i
  json.id   @post.id
end
