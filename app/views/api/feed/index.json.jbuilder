json.key_format! camelize: :lower

json.feedItems do
  json.partial! 'api/feed/feed_or_notification_item',
                collection: @feed_items,
                as: :feed_or_notification_item
end

json.posts do
  @feed_items.each do |feed_item|
    if !!feed_item.post_id
      json.set!       feed_item.post_id do
        json.id       feed_item.post_id
        json.isLiked  feed_item.post_liked
        json.photoUrl Post::photo_url(
          feed_item.blob_id,
          feed_item.blob_filename
        )
        json.extract! feed_item, :body, :post_id, :total_likes
      end
    end
  end
end

json.users do
  @feed_items.each do |feed_item|
    json.set!       feed_item.who do
      json.id       feed_item.who
      json.extract! feed_item, :username, :is_followed, :hidden_follow
    end
  end
end
