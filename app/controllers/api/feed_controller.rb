class Api::FeedController < ApplicationController
  def index
    @feed_items = current_user
                   .feed
                   .joins(<<~SQL
                        JOIN
                          users AS whos ON
                            whos.id = feeds.who
                      SQL
                    )
                   .joins(<<~SQL
                        LEFT OUTER JOIN
                          posts ON
                            posts.id = feeds.post_id
                      SQL
                    )
                   .select(
                     :created_at,
                     :who,
                     :action,
                     :post_id,
                     :username,
                     :body,
                     :author_id,
                     :total_likes,
                   )

    render :index
  end
end
