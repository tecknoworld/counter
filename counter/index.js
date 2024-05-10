// Countdown program 


const increaseButton = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");
const decreaseButton = document.getElementById("decreaseButton");
let count = 0;


increaseButton.onclick = function () {
    count++
    counterLabel.textContent = count;
}

resetButton.onclick = function () {
    count = 0;
    counterLabel.textContent = count;
}


decreaseButton.onclick = function () {
    count--;
    counterLabel.textContent = count;
}



