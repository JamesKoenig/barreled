class Api::UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      login!(user)
    else
      render json: user.errors.full_messages, status: 400
    end
  end

  def destroy
    user = User.find(params[:id])
    if user && logged_in? && current_user.id == user.id
      logout!
      user.destroy
    else
      render json:   ['not logged in or attempted to delete another user'],
             status: 403 # status 403: forbidden
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
