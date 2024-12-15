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
    return computerChoice;
}

let userInput = "";
let humanChoice = "";
function getHumanChoice() {
    userInput = prompt("Rock, Paper or Scissors?");
    userInput = userInput.toLowerCase();
    if (userInput == "rock") {
        humanChoice = "Rock";
    } else if (userInput == "paper") {
        humanChoice = "Paper";
    } else if (userInput == "scissors") {
        humanChoice = "Scissors";
    } else {
        humanChoice = "Incorrect choice, choose either Rock, Paper or Scissors";
    }
    console.log(humanChoice);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock");
        humanScore++
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beat Paper");
        computerScore++
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beat Paper");
        humanScore++
    } else {
        console.log("Looks like you might've put in a wrong value, try again!")
    }
  }

let rounds = 0;
function playGame() {
    rounds = 0;
    while (rounds < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        rounds++
        console.log("Round " + rounds + " finished");
        console.log("Your score is " + humanScore);
        console.log("Opponent's score is " + computerScore);
    }
    console.log("The final score is - Player: " + humanScore + " Computer: " + computerScore)
    if (humanScore > computerScore) {
        console.log("Congratulations, you win!")
    } else if (humanScore < computerScore) {
        console.log("Sadly you lose. Better luck next time!")
    } else {
        console.log("Looks like it's a tie!")
    }
}

playGame();