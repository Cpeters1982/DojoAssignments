from flask import Flask, render_template, request, redirect, jsonify # jsonify lets us send JSON back!
from mysqlconnection import MySQLConnector
app = Flask(__name__)

mysql = MySQLConnector(app, 'quotsyapi')


@app.route('/quotes')
def index():
    return render_template('index.html')

#  JSON-oriented index method
@app.route('/quotes/index_json')
def index_json():
    print "Triggered JSON method"
    query = "SELECT * FROM quotes"
    quotes = mysql.query_db(query)
    return jsonify(quotes=quotes)

@app.route('/quotes/index_html')
def index_partial():
    query = "SELECT * FROM quotes"
    quotes = mysql.query_db(query)
    return render_template('partials/quotes.html', quotes=quotes)

app.run(debug=True)
