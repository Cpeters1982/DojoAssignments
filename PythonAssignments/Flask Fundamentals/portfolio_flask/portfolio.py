from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def welcome_page():
    return render_template('index.html')

@app.route("/about")
def about_page():
    return render_template("about.html")

@app.route("/projects")
def projects_page():
    return render_template("projects.html")

app.run(debug=True)
