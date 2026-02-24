console.log("test text");

function getComputerChoice() {
    let a = Math.random();
    console.log(a);
    if (a <= 0.33) {
        console.log("Computer chose: ROCK");
    } else if (a > 0.33 && a <= 0.66) {
        console.log("Computer chose: PAPER");
    } else {
        console.log("Computer chose: SCISSORS");
    }
}

getComputerChoice();

function getHumanChoice() {
    
}