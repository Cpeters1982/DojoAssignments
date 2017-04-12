from flask import Flask, render_template, redirect, request
from mysqlconnection import MySQLConnector
import requests


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_movie', methods=["POST"])
def get_movie():
    artist = request.form['user_input'].replace(' ', '')
    url = "https://itunes.apple.com/search?term=" + artist + "&entity=musicVideo";
    response = requests.get(url).content

    return response;


app.run(debug=True)
