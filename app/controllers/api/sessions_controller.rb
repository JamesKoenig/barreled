class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(params[:user][:email],
                                    params[:user][:password])
    if user
      login!(user)
    else
      render json: ["invalid email or password"], status: 403
    end
  end

  def debug_create
    render json: params.require(:user).permit(:email,:password)
  end

  def destroy
    if logged_in?
      logout!
    else
      render json: ["cannot log out: not logged in"], status: 403
    end
  end
end
