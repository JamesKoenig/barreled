class Api::FollowsController < ApplicationController
  def show
    current_user_id = current_user.id
    followed_id = params[:user_id].to_i

    follow = Follow.find_by(
        follower_id: current_user_id,
        followed_id: followed_id
      )

    @follow_info = {
      user_id: followed_id,
      is_followed: !!follow,
      hidden_follow: followed_id == current_user_id,
    }

    render :show
  end

  def create
    user = User.find(params[:user_id])

    # error conditions, maybe some of these can be validations
    if !logged_in?
      render json: ["not logged in"], status: :unauthorized
      return
    elsif !user
      render json: ["user not found"], status: 404
      return
    elsif current_user.id == user.id
      render json: ["you cannot follow yourself"], status: 400
      return
    end
    @follow = Follow.new(follower: current_user, followed: user)
    if @follow.save
      redirect_to api_user_follow_url(params[:user_id]), status: :see_other
    else
      render json: @follow.errors.full_messages, status: 400
    end
  end

  def destroy
    follow = Follow.find_by follower: current_user,
                            followed_id: params[:user_id]

    if !follow
      render json: ["you have not followed that user"], status: :not_found
      return
    elsif current_user.id == params[:user_id].to_i
      render json: ["you cannot unfollow yourself 😟"],
             status: :method_not_allowed
    end

    if follow.destroy
      redirect_to api_user_follow_url(params[:user_id]), status: :see_other
    else
      render json: ["unable to unfollow user"], status: 400
    end 
  end
end
