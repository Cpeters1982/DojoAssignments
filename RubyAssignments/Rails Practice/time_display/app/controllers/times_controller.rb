class TimesController < ApplicationController
  def main

    @upper_time = Time.zone.now.strftime("%b %d, %Y")
    @lower_time = Time.zone.now.strftime("%I:%M %p")


  end
end
