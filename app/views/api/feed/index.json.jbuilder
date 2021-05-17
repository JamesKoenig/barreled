json.feedItems do
  json.partial! 'api/feed/feed_or_notification_item',
                collection: @feed_items,
                as: :feed_or_notification_item
end

json.posts do
  @feed_items.each do |feed_item|
    json.set!       feed_item.post_id do
      json.id       feed_item.post_id
      json.body     feed_item.body
      json.authorId feed_item.author_id
    end
  end
end

json.users do
  @feed_items.each do |feed_item|
    json.set!       feed_item.who do
      json.id       feed_item.who
      json.extract! feed_item, :username
    end
  end
end
