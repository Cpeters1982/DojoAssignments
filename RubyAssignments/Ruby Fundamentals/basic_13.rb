def print_1_255
  (1..255).each {|i| puts i}
end
#print_1_255

def print_odds_1_255
  (1..255).each {|i| puts i if i % 2 != 0}
end
# print_odds_1_255

def print_0_255_and_sum
  sum = 0
  (0..255).each {|i| puts "New number: #{i} Sum: #{sum=sum+i}"}
end
# print_0_255_and_sum

def iter_array arr
  arr.each {|item| puts item}
end
# x = [1,3,5,7,9,13]
# iter_array x

def get_max arr
  puts arr.max
end
# x = [1,3,5,7,9,13]
# get_max x

def get_average arr
  total = 0.0
  arr.each {|item| total += item}
  return total / arr.count
end
# x = [1,3,5,7,9,13]
# puts get_average x

def array_with_odds
  y = []
  (1..255).each {|i| y.push i if i % 2 == 1}
  return y
end
# puts array_with_odds.to_s

def greater_than_y arr, y
  return arr.count {|item| item > y}
end
# puts greater_than_y [1, 3, 5, 7], 3

def square_values arr
  arr.each_index {|x| arr[x]*=arr[x]}
end
# x = [1, 5, 10, -2]
# square_values x
# puts x

def eliminate_negatives arr
  arr.each_index {|x| arr[x]=0 unless arr[x]>0}
end
# x = [1, 5, 10, -2]
# eliminate_negatives x
# puts x

def max_min_avg arr
  max = arr.max
  min = arr.min
  avg = get_average arr
  return "Max: #{max}, Min: #{min}, Avg: #{avg}"
end
# x = [1, 5, 10, -2]
# puts max_min_avg x

def shift_forward arr
  arr.each_index {|x| arr[x]=arr[x+1] unless x == arr.count-1}
  arr[arr.count-1] = 0
  return arr
end
# x = [1, 5, 10, 7, -2]
# puts (shift_forward x).to_s

def num_to_string arr
  arr.each_index {|x| arr[x]="Dojo" unless arr[x]>0}
end
x = [-1, -3, 2]
num_to_string x
puts x
