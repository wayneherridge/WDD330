const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);

connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);

form.addEventListener('submit', message, false);

function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}