from flask import Flask, render_template

app = Flask(__name__)



@app.route("/", methods=['GET'])
def main():
    return render_template("index.html")

@app.route("/abbaglianti")
def abbaglianti():
    print("comando abbaglianti")
    return "gnagno"

@app.route("/luci_interne")
def luci_interne():
    print("comando luci interne")
    return "gnagno"

@app.route("/porta")
def porta():
    print("comando porta")
    return "gnagno"

@app.route("/baule")
def balue():
    print("comando baule")
    return "gnagno"
