let socket = new WebSocket("ws://localhost:8080/ws");

// send message from the form
document.forms.publish.onsubmit = function() {
  let outgoingMessage = this.username.value + ": " +this.message.value;

  socket.send(outgoingMessage);
  return false;
};

// message received - show the message in div#messages
socket.onmessage = function(event) {
  let message = event.data;

  let messageElem = document.createElement('div');
  messageElem.textContent = message;
  document.getElementById('messages').prepend(messageElem);
}