require_relative 'human_1'

class Samurai < Human
  @@num_samurai

  def initialize
    @health = 200
  end

  def death_blow object
    if attack object
      object.health = 0
    end
  end

  def meditate
    @health = 200
  end

  def how_many
    puts "There are #{@@num_samurai} samurai"
  end

end
