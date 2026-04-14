// add javascript here
let rawName = prompt("What is your name?");
let username = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
document.getElementById("greeting").textContent = "Hi there, " + username + "!"; 
let bodyPart = document.querySelector("input[type='radio']:checked");

function showResult(bodyPart) {
    if (bodyPart.id = "legs") {
        
    }
}

document.getElementById("result").addEventListener("click", showResult(bodyPart));