class AppleTree

  attr_accessor :age

  def initialize
    @age = 0
    @height = 20
    @apple_count = 0
  end

  def height
    @height
  end

  def apple_count
    @apple_count
  end

  def year_gone_by
    @age += 1
    @height = @height * 1.1
    @apple_count += 2 unless @age < 4 || @age > 10
    self
  end

  def pick_apples
    @apple_count = 0
    self
  end
end
