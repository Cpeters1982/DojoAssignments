require_relative 'mammal'

class Dog < Mammal

  def pet
    @health += 5
    self
  end
  def walk
    @health = @health - 1
    self
  end
  def run
    @health = @health - 10
    self
  end
end

# mammal=Mammal.new
# mammal.display_health


dog = Dog.new
# dog.display_health
dog.walk.walk.walk.run.run.pet.display_health
