document.addEventListener("DOMContentLoaded", function() {
    const socket = io.connect('http://localhost:5000');

    socket.on('connect', function() {
        socket.send("User connected");
    });

    socket.on('message', function(data) {
        const messages = document.getElementById('messages');
        const messageElement = document.createElement('p');
        messageElement.textContent = data;
        messages.appendChild(messageElement);
    });

    document.getElementById('sendBTN').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const message = document.getElementById('message').value;
        socket.send(username + ': ' + message);
        document.getElementById('message').value = '';
    });
});
