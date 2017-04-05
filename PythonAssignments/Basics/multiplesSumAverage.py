'''
Multiples:
    Part I
Write code that prints all the odd numbers from 1 to 1000. Use the for loop and don't use a list to do this exercise.
    Part II
Create another program that prints all the multiples of 5 from 5 to 1,000,000.
'''
def printOddNumbers(start, end):
    for num in range(start, end):
        if num % 2 == 1: print num

printOddNumbers(1, 1000)

def printMultiplesOf5(start, end):
    for num in range(start, end):
        if num % 5 == 0: print num

printMultiplesOf5(5, 1000000)


'''
Sum List
Create a program that prints the sum of all the values in the list: a = [1, 2, 5, 10, 255, 3]
'''
def sumList(input):
    print sum(input)
    return sum(input)

a = [1, 2, 5, 10, 255, 3]
sumList(a)



'''
Average List
Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]
'''

def averageList(input):
    print sum(input) / len(input)

averageList(a)
