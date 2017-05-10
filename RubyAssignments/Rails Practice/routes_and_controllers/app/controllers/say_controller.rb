class SayController < ApplicationController
  def index
    render :text => "What do you want me to say???"
  end

  def hello
    render :text => "Saying Hello!"
  end

  def hello_joe
    render :text => "Saying Hello Joe!"
  end

  def hello_name
    # render :text => params[:name]
    redirect_to '/say/hello/joe'
  end
end
