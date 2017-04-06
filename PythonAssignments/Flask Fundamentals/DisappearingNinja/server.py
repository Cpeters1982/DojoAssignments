from flask import Flask, render_template, redirect, request, session


app = Flask(__name__)
app.secret_key = "cosmicbuffalo"

@app.route('/')
def main_page():

    return "No ninjas here"

@app.route('/ninja')
@app.route('/ninja/')
def ninjas():
    return render_template('ninjas.html')

@app.route('/ninja/<color_choice>')
def ninja(color_choice):
    return render_template('ninja.html', color=color_choice)

app.run(debug=True)
