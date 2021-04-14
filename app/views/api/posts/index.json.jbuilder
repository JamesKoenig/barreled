json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :body
      json.authorId post.author_id
      json.dateTime post.created_at
    end
  end
end

json.users do
  @posts.each do |post|
    json.set! post.author_id do
      json.extract! post.author, :id, :username
    end
  end
end

json.timeStamps @posts do |post|
  json.time post.updated_at.to_i
  json.id   post.id
end
