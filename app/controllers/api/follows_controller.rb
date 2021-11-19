class Api::FollowsController < ApplicationController
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
      render json: ["success!"], status: :created
    else
      render json: @like.errors.full_messages, status: 400
    end
  end

  def destroy
    follow = Follow.find_by follower: current_user,
                            followed_id: params[:user_id]

    if !follow
      render json: ["you have not followed that user"], status: :not_found
      return
    elsif current_user.id == params[:user_id]
      render json: ["you cannot unfollow yourself 😟"],
             status: :method_not_allowed
    end

    if follow.destroy
      render json: ["success"], status: :accepted
    else
      render json: ["unable to unfollow user"], status: 400
    end 
  end
end
