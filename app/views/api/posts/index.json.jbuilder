json.key_format! camelize: :lower

json.feedItems do
  @posts.each.with_index do |post,idx|
    json.set! idx do
      json.time     post.created_at.to_i
      json.user_id  post.author_id
      json.type     "post"
      json.post_id  post.id
    end
  end
end

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
