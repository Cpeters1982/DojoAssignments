class MessagesController < ApplicationController
  def index
    @user = User.find(session[:current_user])
    @messages = Message.all
  end

  def create
    @message = Message.new(content:params[:message_content], user:User.find(session[:current_user]))

    if @message.save
      flash[:notice] = "Successfully posted new message"
    else
      flash[:notice] = "Failed to post new message"
      flash[:errors] = @message.errors.full_messages
    end
    return redirect_to messages_path


  end


end
