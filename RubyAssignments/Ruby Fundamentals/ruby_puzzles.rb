x = [3,5,1,2,7,9,8,13,25,32]
def one arr
  arr.each {|item| puts item}
  return arr.reject {|item| item < 10}
end
# puts one x

y = ['John', 'KB', 'Oliver', 'Cory', 'Matthew', 'Christopher']
def two arr
  arr.shuffle!
  arr.each {|item| puts item}
  return arr.select {|item| item.length > 5}
end
# puts two y

def three
  list = ('a'..'z').to_a
  list.shuffle!
  puts list.last
  puts list.first
  puts "The first letter is a vowel" if ['a', 'e', 'i', 'o', 'u'].include?(list.first)
end
# three

def four
  range = (55..100).to_a
  return range.sample(10)
end
# puts four

def five
  range = (55..100).to_a
  unsorted = range.sample(10)
  sorted = unsorted.sort
  puts sorted
  puts sorted.min
  puts sorted.max
end
# five

def six
  chars = ('a'..'z').to_a + ('A'..'Z').to_a + ('0'..'9').to_a
  random_string = chars.sample(5).join
  return random_string
end
# puts six
def seven
  arr = []
  (1..10).each { arr.push(six)}
  return arr
end
puts seven.to_s
