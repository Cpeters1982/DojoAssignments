class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def new
  end

  def create
    User.create(user_params)
    redirect_to users_path
  end

  def show
    render json: User.find(params[:id])
  end

  def edit
    @id = params[:id]
    @user = User.find(params[:id])
  end

  def update
    User.find(params[:id]).update(user_params)
    redirect_to users_path
  end

  def destroy
  end

  def total
    render text: User.all.count
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name)
    end

end
