'''
Assignment: Making Dictionaries
Create a function that takes in two lists and creates a single dictionary where the first list contains keys and the second values. Assume the lists will be of equal length.

Your first function will take in two lists containing some strings. Here are two example lists:
'''
name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

'''
Hacker Challenge:
If the lists are of unequal length, the longer list should be used for the keys,
the shorter for the values.
'''

def make_dict(arr1, arr2):
    new_dict = {}
    key_list = arr1
    value_list = arr2
    if len(arr2) > len(arr1):
        key_list = arr2
        value_list = arr1

    for index in range(len(value_list)):
        new_dict[key_list[index]] = value_list[index]
    return new_dict

print make_dict(name, favorite_animal)
