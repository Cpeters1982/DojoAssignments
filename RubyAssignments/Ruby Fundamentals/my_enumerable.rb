module MyEnumerable
  def my_each
    x = 0
    until x == self.count
      yield(self[x])
      x += 1
    end
  end
end
class Array
   include MyEnumerable
end
[1,2,3,4].my_each { |i| puts i } # => 1 2 3 4
[1,2,3,4].my_each { |i| puts i * 10 } # => 10 20 30 40
