'''
Part I

Given the following list:
'''
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
'''
Create a program that outputs:

Michael Jordan
John Rosales
Mark Guillen
KB Tonel

'''

def partOne(input):
    for item in input:
        print item["first_name"], item["last_name"]

partOne(students)

'''
Part II

Now, given the following dictionary:
'''

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }


'''
Create a program that prints the following format
(including number of characters in each combined name):

Students
1 - MICHAEL JORDAN - 13
2 - JOHN ROSALES - 11
3 - MARK GUILLEN - 11
4 - KB TONEL - 7
Instructors
1 - MICHAEL CHOI - 11
2 - MARTIN PURYEAR - 13
'''



def partTwo(input):
    for item in input:
        print item
        # print input[item]
        count = 1
        for innerItem in input[item]:
            # print innerItem
            print "{} - {} {} - {}".format(count, innerItem["first_name"], innerItem["last_name"], len(innerItem["first_name"] + innerItem["last_name"]))
            count += 1

partTwo(users)
