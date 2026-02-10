// Function to run when button is clicked
function rollDice() {
    const roll = Math.floor(Math.random() * 20 + 1);
    return roll;
}

function displayResult() {
    
}

// Wait for the DOM to load before adding the event listener
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', rollDice);
    }
});