class UsersController < ApplicationController
  def new
  end
  def create
  @user = User.new(params.require(:user).permit(:first_name, :last_name, :email))
  if @user.save
    flash[:notice] = ['User successfully created']
    redirect_to user_path(@user)
  else
    flash[:notice] = ['User creation unsuccessful']
    flash[:errors] = []
    @user.errors.full_messages.each do |error|
      flash[:errors].push error
    end
    redirect_to new_user_path
  end
  def show
    @user = User.find(params[:id])
  end
end
end
