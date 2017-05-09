class Human

  attr_accessor :strength, :intelligence, :health, :stealth

  def initialize strength=3, stealth=3, intelligence=3, health=100
    @strength=strength
    @stealth=stealth
    @intelligence=intelligence
    @health=health
  end

  def attack object
    if object.class.ancestors.include?(Human)
      object.health -= @strength
      true
    else
      false
    end
    

end
