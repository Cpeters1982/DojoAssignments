'''
Assignment: Find Characters
Given an array of strings, find strings that contain a certain character.
If the string contains that character add the whole string to a array.
When your program completes print the new array. Here's an example:
# input
l = ['hello','world','my','name','is','Anna']
char = 'o'
# output
n = ['hello','world']
'''

def findCharacters(arr, char):
    output = []
    for word in arr:
        if char in word:
            output.append(word)
    print output

l = ['hello','world','my','name','is','Anna']
findCharacters(l, "o")
