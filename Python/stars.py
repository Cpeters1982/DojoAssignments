'''
Part I
Create a function called draw_stars() that takes a list of numbers and prints out *.
'''

# def draw_stars(input):
#     for item in input:
#         print "*" * item
#
# x = [4, 6, 1, 3, 5, 7, 25]
#
# draw_stars(x)

'''
Part II
Modify the function above.
Allow a list containing integers and strings to be passed to the draw_stars() function.
When a string is passed, instead of displaying *, display the first letter
of the string according to the example below.
You may use the .lower() string method for this part.
For example:
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars(x) should print the following in the terminal:
****
ttt
*
mmmmmmm
*****
*******
jjjjjjjjjjj
'''

def draw_stars(input):
    for item in input:
        if type(item) == str:
            print item.lower()[0] * len(item)
        else:
            print "*" * item

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars(x)
