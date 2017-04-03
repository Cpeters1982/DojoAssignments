'''

    Find and Replace

In this string: str = "It's thanksgiving day. It's my birthday,too!"    print the position of the first instance of the word "day". Then create a new string where the word "day" is replaced with the word "month".

    Min and Max

Print the min and max values in a list like this one: x = [2,54,-2,7,12,98]. Your code should work for any list.

    First and Last

Print the first and last values in a list like this one: x = ["hello",2,54,-2,7,12,98,"world"]. Now create a new list containing only the first and last values in the original list. Your code should work for any list.

    New List

Start with a list like this one: x = [19,2,54,-2,7,12,98,32,10,-3,6]. Sort your list first. Then, split your list in half. Push the list created from the first half to position 0 of the list created from the second half. The output should be: [[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98]. Stick with it, this one is tough!
'''

str = "It's thanksgiving day. It's my birthday,too!"


def findAndReplaceDay(string):
    print "position of first day:", string.index("day")
    return string.replace("day", "month")


newString = findAndReplaceDay(str)
print newString

arr = [2, 54, -2, 7, 12, 98]


def minAndMax(array):
    min = array[0]
    max = array[0]
    for x in array:
        if x > max:
            max = x
        if x < min:
            min = x
    print "Min:", min
    print "Max:", max


minAndMax(arr)


def firstAndLast(arr):
    print "First:", arr[0]
    print "Last:", arr[-1]
    return [arr[0], arr[-1]]


firstLast = firstAndLast(arr)
print firstLast


def newList(orig):
    orig.sort()
    print orig
    half1 = orig[:len(orig) / 2]
    print half1
    half2 = orig[len(orig) / 2:]
    print half2
    half2.insert(0, half1)
    return half2


original = [19, 2, 54, -2, 7, 12, 98, 32, 10, -3, 6]

print newList(original)
