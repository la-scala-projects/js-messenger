var templateContent = document.querySelector("#message-template").content;
var message = templateContent.querySelector(".chat-message");
var chatContainer = document.querySelector(".chat-content");
var chatInput = document.querySelector(".chat-form__input");
var chatButtonSend = document.querySelector(".chat-form__button");
var chatMessages = chatContainer.children;
var chatDeleteButton = document.querySelector(".chat-message__button");

var createNewMessage = function() {
  var chatInputContent = chatInput.value;
  var newMessage = message.cloneNode(true);
  var newMessageContent = newMessage.querySelector(".chat-message__text");
  newMessageContent.textContent = chatInputContent;
  var deleteButton = newMessage.querySelector(".chat-message__button");
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
