// Function to get random d20 roll
function rollDice() {
    const roll = Math.floor(Math.random() * 20 + 1);
    return roll;
}

// Determine Oracle message based on roll
function getMessage(roll) {
    let message = '';

    if ( roll <= 7 ) {
        message = "The Oracle says No";
    } else if ( roll <= 13 ) {
        message = "The Oracle says maybe. Either it is a partial result, or reroll if a yes/no answer is needed";
    } else {
        message = "The Oracle says Yes";
    }

    return message;
}

// display result on webpage
function displayResult() {
    
}

// code for testing
let result = rollDice();
console.log(getMessage(result));
