let i;
for(i = 0; i < 6; ++i){
    const message = prompt("enter message number " + (i+1) + ": ");
    const messageElement = document.createElement("h" + String(i+1));
    console.log(messageElement);
    messageElement.innerHTML = message;
    document.appendChild(messageElement);
}