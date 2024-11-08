from flask import Flask, render_template

app = Flask(__name__, template_folder=".")


@app.route("/")
def serve_index():
    return render_template("index.html")

@app.route("/about")
def serve_about():
    return render_template("about.html")

@app.route("/theme")
def serve_theme():
    return render_template("toggle-theme.html")

@app.route("/toggle-theme")
def serve_toggle_theme():
    return render_template("toggle-theme.html")

@app.route("/theme-toggle")
def serve_theme_toggle():
    return render_template("toggle-theme.html")

@app.route("/pricing")
def serve_pricing():
    return render_template("pricing.html")

@app.route("/<path:dummy>")
def page_not_found(dummy):
    return render_template("404.html"), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
