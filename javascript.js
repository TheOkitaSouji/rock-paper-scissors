let computerChoice = "";
let randomNumber = 0;
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computerChoice = "Rock";
    } else if (randomNumber == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
}

let userInput = "";
let humanChoice = "";
function getHumanChoice() {
    userInput = prompt("Rock, Paper or Scissors?");
    console.log(userInput);
    if (userInput == "Rock") {
        humanChoice = "Rock";
    } else if (userInput == "Paper") {
        humanChoice = "Paper";
    } else if (userInput == "Scissors") {
        humanChoice = "Scissors";
    } else {
        humanChoice = "Incorrect choice, choose either Rock, Paper or Scissors";
    }
    console.log(humanChoice);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice = "Rock") && (computerChoice = "Scissors") {
        console.log("You win! Rock beats Scissors");
    } else if (humanChoice = "Rock") && (computerChoice = "Paper") {
        console.log("You lose! Paper beats Rock");
    } else if (humanChoice = "Rock") && (computerChoice = "Rock") {
        console.log("It's a tie!");
    } else if (humanChoice = "Paper") && (computerChoice = "Rock") {
        console.log("You win! Paper beats Rock");
    } else if (humanChoice = "Paper") && (computerChoice = "Scissors") {
        console.log("You lose! Scissors beat Paper");
    } else if (humanChoice = "Paper") && (computerChoice = "Paper") {
        console.log("It's a tie!");
    } else if (humanChoice = "Scissors") && (computerChoice = "Rock") {
        console.log("You lose! Rock beats Scissors");
    } else if (humanChoice = "Scissors") && (computerChoice = "Paper") {
        console.log("You win! Scissors beat Paper");
    } else if (humanChoice = "Scissors") && (computerChoice = "Scissors") {
        console.log("It's a tie!");
    } else {
        console.log("Looks like you might've put in a wrong value, try again!")
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  
  //Check out what's wrong with if statements, try toLowerCase for prompt