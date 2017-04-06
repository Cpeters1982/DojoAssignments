from flask import Flask, render_template, redirect, request, session


app = Flask(__name__)
app.secret_key = "cosmicbuffalo"

@app.route('/')
def main_page():

    return render_template('index.html')

@app.route('/result', methods=["POST"])
def submit():

    print "clicked"
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']




    return render_template('result.html', name=name, location=location, language=language, comment=comment)

app.run(debug=True)
