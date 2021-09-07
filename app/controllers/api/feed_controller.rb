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
                   .joins(<<~SQL
                      LEFT OUTER JOIN
                        likes ON
                          posts.id = likes.post_id
                    SQL
                    )
                   .where([
                      'likes.user_id = ? OR likes.user_id IS NULL',
                      current_user.id,
                    ])
                   .select(
                     :created_at,
                     :who,
                     :action,
                     :post_id,
                     :username,
                     :body,
                     :author_id,
                     :total_likes,
                     Arel.sql('likes.user_id IS NOT NULL as post_liked')
                   )

    render :index
  end
end
