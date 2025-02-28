const chatApp = document.querySelector(".chat-app");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

const ws = new WebSocket('wss://echo.websocket.org');
ws.onopen = () =>{
    console.log("Connect to the server")
};
ws.onerror = (error) =>{
  console.log("Webkit Error" , error)
}


// Function to display messages in the chat box
function displayMessage(message, type ,isUser = true) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = message;
    
    if (isUser) {
        messageDiv.style.textAlign = 'right';
        messageDiv.style.backgroundColor = '#DCF8C6';
    } else {
        messageDiv.style.textAlign = 'left';
        messageDiv.style.backgroundColor = '#ECECEC';
    }

    chatApp.appendChild(messageDiv);
    chatApp.scrollTop = chatApp.scrollHeight;
}

// Event listener for the send button
sendBtn.addEventListener('click', (e) => {
   e.preventDefault();
   const message = chatInput.value;
   displayMessage(message , "Sent");

   ws.send(message)
   chatInput.value = ""
});

ws.onmessage = (event) =>{
    const message = event.data ;
    displayMessage(message , "recived" , false)
}

// Optional: Allow sending messages by pressing Enter
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});