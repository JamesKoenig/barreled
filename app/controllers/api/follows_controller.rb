class Api::FollowsController < ApplicationController
  def create
    user = User.find(params[:user_id])

    # error conditions, maybe some of these can be validations
    if !logged_in?
      render json: ["not logged in"], status: 400
      return
    elsif !user
      render json: ["user not found"], status: 404
      return
    elsif current_user.id == user.id
      render json: ["cannot follow yourself"], status: 400
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
  end
end
