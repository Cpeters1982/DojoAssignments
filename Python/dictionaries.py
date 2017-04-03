'''
Create a dictionary containing some information about yourself.
The keys should include name, age, country of birth, favorite language.

Write a function that will print something like the following as it executes:

My name is Anna
My age is 101
My country of birth is The United States
My favorite language is Python
'''

me = {"name":"Nick", "age":24, "country of birth": "The United States", "favorite language":"Swift"}

def printMeDict(input):
    for item in input:
        print "My {} is {}".format(item, input[item])
printMeDict(me)
