from flask import Flask, render_template, redirect, request, session
import random

app = Flask(__name__)
app.secret_key = "cosmicbuffalo"

@app.route('/')
def main_page():

    # print session

    print "hiting main"
    if 'number' not in session.keys():
        session['number'] = random.randint(1,100)
        print "session number is", session['number']
        session['phrase'] = "Take a guess!"

    if 'guess' in session.keys():
        print "current guess is", session['guess']
        if session['guess'] > session['number']:
            print "session guess: {} > session number: {}".format(session['guess'], session['number'])
            session['phrase'] = "Too high! Guess a lower number"

        elif session['guess'] < session['number']:
            print "session guess: {} < session number: {}".format(session['guess'], session['number'])
            session['phrase'] = "Too low! Guess a higher number"
        else:
            print "session guess: {} is equal to session number: {}".format(session['guess'], session['number'])
            print "Changing phrase to You got it right!"
            session['phrase'] = "You got it right! Alright sucker, you buy the coffee!"

    return render_template('index.html')



@app.route('/guess', methods=["POST"])
def guess():
    print "Getting guess"
    session['guess'] = int(request.form['guess'])
    print session['guess']
    return redirect('/')


@app.route('/reset', methods=["POST"])
def reset():
    print "Resetting all variables"
    print "session number:", session['number']
    print "session guess:", session['guess']
    print "attempting to pop guess"
    session.pop('guess')
    print "attempting to pop number"
    session.pop('number')
    print session
    return redirect('/')


app.run(debug=True)
