class Api::FeedController < ApplicationController
  def index
    @feed_items = current_user
                   .feed
                   .joins("JOIN users AS whos ON whos.id = feeds.who")
                   .joins("LEFT OUTER JOIN posts ON posts.id = feeds.post_id")
                   .select(
                     :updated_at,
                     :who,
                     :action,
                     :post_id,
                     :username,
                     :body,
                     :author_id,
                   )

    render :index
  end
end
