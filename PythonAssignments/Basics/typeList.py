'''
Assignment: Type List

Imagine that your program input will always be an array.
For each item in the array, test its data type.

If the item is a string, concatenate it onto a new string.
If it is a number, add it to a running sum.

At the end of your program print the string, the number and an analysis of what the array contains. If it contains only one type, print that type, otherwise, print 'mixed'.
'''

def typeList(input):
    endSum = 0
    endString = ""
    types = []
    for item in input:
        if type(item) not in types:
            types.append(type(item))
        if type(item) is str:
            endString += item
        if type(item) is int or type(item) is float:
            endSum += item
    print "String:", endString
    print "Sum:", endSum
    if len(types) == 1:
        typeString = "string"
        if types[0] is float:
            typeString = "float"
        elif types[0] is int:
            typeString = "integer"
        elif types[0] is list:
            typeString = "list"

        print "The array you entered is of", typeString, "type"
    else:
        print "The array you entered is of mixed type"

l = ['magical unicorns',19,'hello',98.98,'world']
typeList(l)

l = [2,3,1,7,4,12]
typeList(l)

l = ['magical','unicorns']
typeList(l)
