from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "cosmicbuffalo"

@app.route('/')
def index():

    if 'count' in session.keys():
        session['count'] += 1
    else:
        session['count'] = 1
    return render_template("index.html")

@app.route('/show', methods=["POST"])
def add_2_click():
    print "clicked button"
    session['count'] += 2
    return redirect('/')

@app.route('/reset', methods=["POST"])
def reset_click():
    print "reset counter"
    session['count'] = 0
    return redirect('/')


app.run(debug=True)
