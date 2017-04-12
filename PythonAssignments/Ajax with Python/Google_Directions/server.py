from flask import Flask, render_template, request, redirect, jsonify
import requests
import urllib


app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/directions', methods=['POST'])
def get_directions():
    origin = request.form['origin']
    destination = request.form['destination']
    print origin
    print destination

    data = { 'origin':origin, 'destination':destination }

    url = "https://maps.googleapis.com/maps/api/directions/json?" + urllib.urlencode(data) + "&key=AIzaSyDXgfcaIFmlF_Z1G3VtlLxmoftXovGIeOs"

    # print url

    response = requests.get(url).json()
    # print "Got response"
    # print response
    # print type(response)
    # response = jsonify(response=response)
    # print len(response)
    # print response.keys()

    return jsonify(response=response)

app.run(debug=True)
