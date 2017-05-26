class UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(params.require(:user).permit(:username, :first_name, :last_name, :password, :password_confirmation))
    if @user.save
      flash[:notice] = ['User successfully created']
      session[:current_user] = @user.id
      redirect_to messages_path
    else
      flash[:notice] = ['User creation unsuccessful']
      flash[:errors] = []
      @user.errors.full_messages.each do |error|
        flash[:errors].push error
      end
      redirect_to new_user_path
    end
  end

  def login
    @user = User.find_by(username: params[:username])
    if @user
      unless @user.password != params[:password]
        session[:current_user] = @user.id
        return redirect_to messages_path
      else
        flash[:notice] = ['Unable to login']
      end
    else
      flash[:notice] = ['Unable to login']
    end
    redirect_to new_user_path
  end

  def logout
    session.clear
    redirect_to new_user_path
  end



end
