class TimesController < ApplicationController
  def index
    unless session.key?(:count)
      session[:count] = 1
    else
      session[:count] += 1
    end
    render :text => "You visited this url #{session[:count]} times"
  end

  def restart
    session.clear
    render :text => "Destroyed the session!"
  end
end
