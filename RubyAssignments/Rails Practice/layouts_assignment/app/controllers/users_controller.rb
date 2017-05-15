class UsersController < ApplicationController

  layout "two_column"

  def index
    @user = User.new
    @users = User.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to "/users"
    else
      redirect_to "/users"
    end
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :favorite_language)
    end



end
