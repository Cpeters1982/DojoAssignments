'''
Write a program that prints a checkerboard to the console.

Your program should require no input and produce console output that looks like so:
* * * *
 * * * *
* * * *
 * * * *
* * * *
 * * * *
* * * *
 * * * *
'''

def printCheckerboard():
    starSpace = "* "
    spaceStar = " *"
    for x in range(0,4):
        print starSpace * 4
        print spaceStar * 4

printCheckerboard()

def customCheckerboard(rows, columns):
    starSpace = "* "
    spaceStar = " *"
    for x in range(0,(rows/2 + 1)):
        print starSpace * (columns/2)
        print spaceStar * (columns/2)

customCheckerboard(10,20)
