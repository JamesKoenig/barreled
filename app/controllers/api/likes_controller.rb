class Api::LikesController < ApplicationController
  def create
    post = Post.find(params[:post_id])

    if !post
      render json: ["post not found"], status: 404
      return
    end

    @like = Like.new(user_id: current_user.id, post_id: post.id)
    if  @like.save
      post.total_likes =
        Post.left_outer_joins(:likes)
            .where(posts: { id: params[:post_id] })
            .group("posts.id")
            .pluck("count(likes.user_id)")
      post.save!
      redirect_to api_post(params[:post_id])
    else
      render json: @like.errors.full_messages, status: 400
    end
  end
end
