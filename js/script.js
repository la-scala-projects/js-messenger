var templateContent = document.querySelector("#message-template").content;
var message = templateContent.querySelector(".chat-message");
var chatContainer = document.querySelector(".chat-content");
var chatInput = document.querySelector(".chat-form-input");
var chatButtonSend = document.querySelector(".chat-form-button");
var chatMessages = chatContainer.children;
var chatDeleteButton = document.querySelector(".chat-message-button");

var createNewMessage = function() {
  var chatInputContent = chatInput.value;
  var newMessage = message.cloneNode(true);
  var newMessageContent = newMessage.querySelector(".chat-message-text");
  newMessageContent.textContent = chatInputContent;
  var deleteButton = newMessage.querySelector(".chat-message-button");
  deleteButton.addEventListener("click", function() {
    newMessage.remove();
  });
  chatContainer.appendChild(newMessage);
};

chatButtonSend.addEventListener("click", function(evt) {
  evt.preventDefault();
  createNewMessage();
  chatInput.value = "";
});
