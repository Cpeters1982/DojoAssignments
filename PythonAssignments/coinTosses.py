'''
Write a function that simulates tossing a coin 5,000 times.
Your function should print how many times the head/tail appears.

Sample output should be like the following:

Starting the program...
Attempt #1: Throwing a coin... It's a head! ... Got 1 head(s) so far and 0 tail(s) so far
Attempt #2: Throwing a coin... It's a head! ... Got 2 head(s) so far and 0 tail(s) so far
Attempt #3: Throwing a coin... It's a tail! ... Got 2 head(s) so far and 1 tail(s) so far
Attempt #4: Throwing a coin... It's a head! ... Got 3 head(s) so far and 1 tail(s) so far
...
Attempt #5000: Throwing a coin... It's a head! ... Got 2412 head(s) so far and 2588 tail(s) so far
Ending the program, thank you!
'''
import random

def coinTosses():
    print "Starting the program..."
    heads_count = 0
    tails_count = 0
    for toss in range(1, 5001):
        coin = round(random.random())
        if coin == 1:
            heads_count += 1
            print "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(toss, "head", heads_count, tails_count)
        else:
            tails_count += 1
            print "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(toss, "tail", heads_count, tails_count)
coinTosses()
