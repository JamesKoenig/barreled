class Api::FeedController < ApplicationController
  def index
    @feed_items = current_user.feed_items
    render :index
  end
end
