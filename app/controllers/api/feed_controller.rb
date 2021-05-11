class Api::FeedController < ApplicationController
  def index
    @feedItems = current_user.feed
    render :index
  end
end
