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
  let userInput = prompt(
    "Input number: 1 is for rock, 2 is for paper, 3 is for scissors",
  );

  if (userInput == 1) {
    console.log("User chose: ROCK");
  } else if (userInput == 2) {
    console.log("User chose: PAPER");
  } else if (userInput == 3) {
    console.log("User chose: SCISSORS");
  } else {
    console.log("User's choice is invalid!");
  }
  return userInput;
}

let humanScore = 0;
let computerScore = 0;

let stopConditionUser = false;
let stopConditionComputer = false;

while (true) {
  let humanResult = getHumanChoice();

  let computerResult = getComputerChoice();

  if (humanResult == computerResult) {
    console.log("It's a Draw");
  } else if (humanResult == 1 && computerResult == 2) {
    computerScore++;
    console.log(
      "Computer gets 1 point. Paper beats rock. Computer has " +
        computerScore +
        " points.",
    );
  } else if (humanResult == 1 && computerResult == 3) {
    humanScore++;
    console.log(
      "User gets 1 point. Rock beats scissors. User has " +
        humanScore +
        " points.",
    );
  } else if (humanResult == 2 && computerResult == 1) {
    humanScore++;
    console.log(
      "User gets 1 point. Paper beats rock. User has " +
        humanScore +
        " points.",
    );
  } else if (humanResult == 2 && computerResult == 3) {
    computerScore++;
    console.log(
      "Computer gets 1 point. Scissors beat paper. Computer has " +
        computerScore +
        " points.",
    );
  } else if (humanResult == 3 && computerResult == 1) {
    computerScore++;
    console.log(
      "Computer gets 1 point. Rock beats scissors. Computer has " +
        computerScore +
        " points.",
    );
  } else if (humanResult == 3 && computerResult == 2) {
    humanScore++;
    console.log(
      "User gets 1 point. Scissors beat paper. User has " +
        humanScore +
        " points.",
    );
  } else {
    console.log("Invalid outcome!!!");
  }

  if (computerScore == 5) {
    console.log("Computer WINS!");
    break;
  }

  if (humanScore == 5) {
    console.log("User WINS!");
    break;
  }
}

console.log(humanScore);
console.log(computerScore);
