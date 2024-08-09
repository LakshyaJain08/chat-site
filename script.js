document.getElementById('send-button').addEventListener('click', function() {
    var messageInput = document.getElementById('message-input');
    var messageText = messageInput.value;
  
   
    if (messageText !== '') {
      var messageContainer = document.createElement('div');
      messageContainer.classList.add('message', 'blue-message');
      messageContainer.textContent = messageText;
  
      var messagesDiv = document.querySelector('.messages');
      messagesDiv.appendChild(messageContainer);
  
      messagesDiv.scrollTop = messagesDiv.scrollHeight; 
      messageInput.value = ''; 
    }
  });