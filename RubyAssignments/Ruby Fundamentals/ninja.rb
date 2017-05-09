require_relative 'human_1'

class Ninja < Human

  def initialize
    @health = 175
  end

  def steal object
    if attack object
      health += 10
    end
  end

  def get_away
    @health -= 15
  end

end
