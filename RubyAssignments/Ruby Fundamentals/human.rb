require_relative 'mammal'
class Human < Mammal
  def subclass_method
    breathe
  end

  def another_method
    self.eat
  end

  def explicitily_speak
    self.speak
  end

  def implicitily_speak
    speak
  end

  def explicitily_cry
    self.cry
  end

  def implicitily_cry
    cry
  end
end

mammal = Mammal.new
# mammal.speak # => protected method `speak' called for #<Mammal:0x007fa5438183d8> (NoMethodError)
# mammal.calling_speak # => I am a protected method
# mammal.calling_cry # => Sniff sniff...
# mammal.cry # => private method `cry' called for #<Mammal:0x007fd9830de5f8> (NoMethodError)

person = Human.new
# person.subclass_method
# person.another_method
# person.speak # => protected method `speak' called for #<Human:0x007fedfe824710> (NoMethodError)
# person.explicitily_speak # => I am a protected method
# person.implicitily_speak # => I am a protected method
# person.cry # => private method `cry' called for #<Human:0x007f8f298de248> (NoMethodError)
# person.explicitily_cry # => `explicitily_cry': private method `cry' called for #<Human:0x007f87a30bf450> (NoMethodError)
person. implicitily_cry # => Sniff sniff...
