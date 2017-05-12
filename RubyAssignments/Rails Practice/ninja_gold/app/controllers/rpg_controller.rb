class RpgController < ApplicationController
  def index

    session[:money] = 0 unless session.key?(:money)
    session[:activity_list] = [] unless session.key?(:activity_list)

  end

  def farm
    earned_gold = rand(10..20)
    session[:money] += earned_gold
    session[:activity_list].push(earnings_string(earned_gold, "farm"))
    redirect_to '/'
  end

  def cave
    earned_gold = rand(5..10)
    session[:money] += earned_gold
    session[:activity_list].push(earnings_string(earned_gold, "cave"))
    redirect_to '/'
  end

  def casino
    unless session[:money] <= 0
      earned_gold = rand(-50..50)
      if earned_gold >= 0
        session[:money] += earned_gold
        session[:activity_list].push(earnings_string(earned_gold, "casino"))
      else
        unless session[:money] + earned_gold < 0
          session[:money] += earned_gold
          session[:activity_list].push("Entered a casino and lost #{earned_gold.abs} gold... Ouch. (#{get_time})")
        else
          session[:money] = 0
          session[:activity_list].push("Entered a casino and lost all of your gold... Ouch. (#{get_time})")
        end
      end

    else
      session[:activity_list].push("You can't go to the casino if you don't have any gold! (#{get_time})")
    end
    redirect_to '/'
  end

  def house
    earned_gold = rand(2..5)
    session[:money] += earned_gold
    session[:activity_list].push(earnings_string(earned_gold, "house"))
    redirect_to '/'
  end
  def reset
    session.clear
    redirect_to '/'
  end

  private
    def earnings_string earnings, loc
      return "Earned #{earnings} gold from the #{loc}! (#{get_time})"
    end
    def get_time
      return Time.zone.now.strftime("%b %d, %Y %I:%M %p")
    end

end
