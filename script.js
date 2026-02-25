function getComputerChoice() {
    let a = Math.random();
    let computerChoice;
    if (a <= 0.33) {
        console.log("Computer chose: ROCK");
        computerChoice = 1;
    } else if (a > 0.33 && a <= 0.66) {
        console.log("Computer chose: PAPER");
        computerChoice = 2;
    } else {
        console.log("Computer chose: SCISSORS");
        computerChoice = 3;
    }
    return computerChoice;
}

function getHumanChoice() {
    let userInput = prompt("Input number: 1 is for rock, 2 is for paper, 3 is for scissors");

    if (userInput == 1) {
        console.log("User chose: ROCK");
    } else if (userInput == 2) {
        console.log("User chose: PAPER");
    } else if (userInput == 3) {
        console.log("User chose: SCISSORS");
    } else {
        console.log("User's choice is invalid!")
    }
    return userInput;
}


let computerResult = getComputerChoice();
console.log("Computer: " + computerResult);

let humanResult = getHumanChoice();
console.log("User: " + humanResult);

