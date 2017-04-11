from flask import Flask, render_template, request, redirect, jsonify # jsonify lets us send JSON back!
from mysqlconnection import MySQLConnector
app = Flask(__name__)

mysql = MySQLConnector(app, 'quotsyapi')


@app.route('/quotes')
def index():
    query = "SELECT * FROM quotes"
    quotes = mysql.query_db(query)
    return render_template('index.html', quotes=quotes)

#  JSON-oriented index method
@app.route('/quotes/index_json')
def index_json():
    query = "SELECT * FROM quotes"
    quotes = mysql.query_db(query)
    return jsonify(quotes=quotes)

@app.route('/quotes/index_html')
def index_partial():
    query = "SELECT * FROM quotes"
    quotes = mysql.query_db(query)
    return render_template('partials/quotes.html', quotes=quotes)

@app.route('/quotes/create', methods=['POST'])
def create():
    quote = request.form
    query = "INSERT INTO quotes (author, quote) VALUES ('{}', '{}')".format(quote['author'], quote['quote'])
    mysql.query_db(query)
    return_query = "SELECT * FROM quotes"
    quotes = mysql.query_db(return_query)
    return render_template('partials/quotes.html', quotes=quotes)


app.run(debug=True)
