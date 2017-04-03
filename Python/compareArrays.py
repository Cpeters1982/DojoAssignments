'''
Assignment: Compare Arrays

Your program should be able to compare two lists: list_one and list_two.
If both lists are identical print "The lists are the same".
If they are not identical print "The lists are not the same."
'''

def compareArrays(arr1, arr2):
    if len(arr1) != len(arr2):
        print "The lists are not the same"
        return
    x = 0
    while x < len(arr1):
        if arr1[x] != arr2[x]:
            print "The lists are not the same"
            break
        x += 1
    else:
        print "The lists are the same"



list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]

compareArrays(list_one, list_two)

list_one = [1,2,5,6,5]
list_two = [1,2,5,6,5,3]

compareArrays(list_one, list_two)

list_one = [1,2,5,6,5,16]
list_two = [1,2,5,6,5]

compareArrays(list_one, list_two)

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']

compareArrays(list_one, list_two)
