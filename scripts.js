let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    return choices[~~(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    playerSelection = prompt("Choose rock, paper, or scissors.");
    if (playerSelection == "rock") {
        if (computerSelection == "rock") return "It's a tie! Both chose Rock!";
        else if (computerSelection == "paper") {
            computerScore++;
            return "You lose! Rock loses to Paper!";
        }
        else {
            playerScore++;
            return "You win! Rock beats scissors!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore++;
            return "You win! Paper beats Rock!";
        }
        else if (computerSelection == "paper") return "It's a tie! Both chose Paper!";
        else {
            computerScore++;
            return "You lose! Paper loses to Scissors!";
        }
    } else {
        if (computerSelection == "rock") {
            computerScore++;
            return "You lose! Scissors loses to Rock!";
        }
        else if (computerSelection == "paper") {
            playerScore++;
            return "You win! Scissors beats Paper!";
        }
        else return "It's a tie! Both chose Scissors!";
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
}

game();