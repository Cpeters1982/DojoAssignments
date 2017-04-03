
'''
Odd/Even:
Create a function called odd_even that counts from 1 to 2000.
As your loop executes have your program print the number of that iteration
and specify whether it's an odd or even number.

Number is 1.  This is an odd number.
Number is 2.  This is an even number.
Number is 3.  This is an odd number.
...
Number is 2000.  This is an even number.
'''
def odd_even(start, end):
    for num in range(start, end + 1):
        if num % 2 == 0:
            print "Number is {}. This is an even number".format(num)
        else:
            print "Number is {}. This is an odd number".format(num)

odd_even(1, 2000)


'''
Multiply:
Create a function called 'multiply' that iterates through each value in a list
(e.g. a = [2, 4, 10, 16]) and returns a list where each value has been multiplied by 5.
'''
def multiply(input, multiplier):
    output = []
    for item in input:
        output.append(item * multiplier)
    return output

a = [2, 4, 10, 16]
b = multiply(a, 5)
print b


'''
Hacker Challenge:
Write a function that takes the multiply function call as an argument.
Your new function should return the multiplied list as a two-dimensional list.
Each internal list should contain the number of 1's as the number in the original list.

def layered_multiples(arr)
  # your code here
  return new_array
x = layered_multiples(multiply([2,4,5],3))
print x
# output
>>>[[1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
'''

def layered_multiples(arr):
    output = []
    for item in arr:
        output.append([1] * item)
    return output

x = layered_multiples(multiply([2,4,5],3))
print x
