from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'sagarr.h'  # Use SECRET_KEY for security-related configurations
socketio = SocketIO(app, cors_allowed_origins='*')

@socketio.on('message')
def handle_message(message):
    print("Received Message:" + message)
    if message != 'User connected':
        send(message, broadcast=True)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    socketio.run(app, allow_unsafe_werkzeug=True)
