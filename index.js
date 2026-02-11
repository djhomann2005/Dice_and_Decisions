// Function to get random d20 roll
function rollDice() {
    return Math.floor(Math.random() * 20 + 1);
}

// Determine Oracle message based on roll
function getMessage(roll) {
    if ( roll <= 7 ) {
        return "The Oracle says No";
    } else if ( roll <= 13 ) {
        return "The Oracle says maybe. Either it is a partial result, or reroll if a yes/no answer is needed";
    } else {
        return "The Oracle says Yes";
    }
}

// Run in response to press of Roll button
document.addEventListener("DOMContentLoaded", () => {
    const rollContainer = document.getElementById("rollResult");
    const messageContainer = document.getElementById("oracleMessage");
    const rollButton = document.getElementById("rollButton");

    function displayResult(roll, message) {
        rollContainer.textContent = `Roll Result: ${roll}`;
        messageContainer.textContent = message;
    }

    function runOracle() {
        const roll = rollDice();
        const message = getMessage(roll);
        displayResult(roll, message);
    }

    rollButton.addEventListener("click", runOracle);
});
