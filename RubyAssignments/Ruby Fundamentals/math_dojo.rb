
class Array
  def sum
    sum = 0
    self.each {|item| if item.class == Fixnum || item.class == Float then sum += item else sum += item.sum end}
    return sum
  end
end


class MathDojo
  # your code here
  @result
  def initialize
    @result = 0
    self
  end
  def result
    puts "Result: #{@result}"
    self
  end
  def add *params
    # puts "Adding #{params.to_s}..."
    @result += params.sum {|item| item.sum if item.count > 1}
    # self.result
    self
  end
  def subtract *params
    # puts "Subtracting #{params.to_s}..."
    @result -= params.sum {|item| item.sum if item.count > 1}
    # self.result
    self
  end
end
challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).result # => 4
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15
