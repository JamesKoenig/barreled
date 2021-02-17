json.posts do
  json.set! @post.id do
    json.extract! @post, :id, :body, :author_id
    json.date @post.created_at
  end
end

json.users do
  json.set! @post.author_id do
    json.extract! @post.author, :id, :username
  end
end

