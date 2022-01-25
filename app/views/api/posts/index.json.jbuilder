json.key_format! camelize: :lower

json.feedItems do
  json.array! @posts do |post|
      json.time     post.created_at.to_i
      json.user_id  post.author_id
      json.type     "post"
      json.post_id  post.id
  end
end

json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :body, :author_id, :total_likes
      json.dateTime post.created_at
      json.isLiked  post.post_liked
      photo = Post.find(post.id).photo
      json.photoUrl photo.attached? ? url_for(photo) : nil
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
