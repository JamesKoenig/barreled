class Api::LikesController < ApplicationController
  def create
    post = Post.find(params[:post_id])

    if !post
      render json: ["post not found"], status: 404
      return
    end

    @like = Like.new(user_id: current_user.id, post_id: post.id)
    if @like.save
      update_total_likes(post)
      redirect_to api_post_url(params[:post_id]), status: :see_other
    else
      render json: @like.errors.full_messages, status: 400
    end
  end

  def destroy
    like = Like.find_by post_id: params[:post_id], user_id: current_user.id

    if !like
      render json: ["user has not liked that post"], status: 400
      return
    end

    if like.destroy
      post = Post.find(params[:post_id])
      update_total_likes(post)
      redirect_to api_post_url(params[:post_id]), status: :see_other
    else
      render json: ["unable to unlike post"], status: 400
    end
  end

  private

  def update_total_likes(post)
    post.total_likes =
      Post.left_outer_joins(:likes)
          .where(posts: { id: post.id })
          .group("posts.id")
          .pluck("count(likes.user_id)")[0]
    # the [0] above is inelegant but got the job done for now...
    post.save!
  end
end
