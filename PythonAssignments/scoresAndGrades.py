
'''
Write a function that generates ten scores between 60 and 100.
Each time a score is generated, your function should display what the grade
is for a particular score. Here is the grade table:

Score: 60 - 69; Grade - D
Score: 70 - 79; Grade - C
Score: 80 - 89; Grade - B
Score: 90 - 100; Grade - A
The result should be like this:

Scores and Grades
Score: 87; Your grade is B
Score: 67; Your grade is D
Score: 95; Your grade is A
Score: 100; Your grade is A
Score: 75; Your grade is C
Score: 90; Your grade is A
Score: 89; Your grade is B
Score: 72; Your grade is C
Score: 60; Your grade is D
Score: 98; Your grade is A
End of the program. Bye!

'''
import random

def scoresAndGrades():
    print "Scores and Grades"
    for score in range(10):
        random_score = int((random.random() * 40) + 60)
        if random_score < 70:
            print "Score: {}; Your grade is D".format(random_score)
        elif random_score < 80:
            print "Score: {}; Your grade is C".format(random_score)
        elif random_score < 90:
            print "Score: {}; Your grade is B".format(random_score)
        else:
            print "Score: {}; Your grade is A".format(random_score)
    print "End of the program. Bye!"


scoresAndGrades()
