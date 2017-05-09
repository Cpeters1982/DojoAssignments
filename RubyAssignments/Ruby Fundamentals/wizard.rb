require_relative 'human_1'

class Wizard < Human
  def initialize
    @health = 50
    @intelligence = 25
  end

  def heal
    @health += 10
  end

  def fireball object
    if object.class.ancestors.include?(Human)
      object -= 20
      true
    else
      false
    end
  end  

end
