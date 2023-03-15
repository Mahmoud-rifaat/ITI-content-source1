const userSection = document.getElementById('user-output');
let i;
const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
for(i = 1; i <= 6; ++i){
    const message = prompt("enter message number " + i + ": ");
    const headingElement = document.createElement(headings[i-1]);
    headingElement.textContent = message;
    userSection.appendChild(headingElement);
}