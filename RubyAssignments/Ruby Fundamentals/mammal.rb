class Mammal
  # @health
  attr_accessor :health

  def initialize health=150
    @health=health
  end
  def display_health
    puts "Health: #{self.health}"
    self
  end

  def breathe
    puts "Inhale and exhale"
  end

  def eat
    puts "Yum yum yum"
  end

  def calling_speak
    speak
  end

  def calling_cry
    cry
  end

  protected
    def speak
      puts "I am a protected method"
    end

  private
    def cry
      puts "Sniff sniff..."
    end

end
