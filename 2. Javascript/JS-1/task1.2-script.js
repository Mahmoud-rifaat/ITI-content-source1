const outputAreaGrasp = document.getElementById('output-area');
const sumGrasp = document.createElement('p');

let sum = 0;
let input;
while(sum < 100){

    input = prompt("Enter a number: ");
    
    if(input == 0)
        break;
    
    if(isFinite(input))
        sum += parseInt(input);

    if(sum >= 100){
        alert("Sum reached 100!");
        break;
    }
}

sumGrasp.textContent = sum;
outputAreaGrasp.appendChild(sumGrasp);