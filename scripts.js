let computerScore = 0;
let playerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    return choices[~~(Math.random() * choices.length)];
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return 0;
    }

    if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS" ||
        playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK" ||
        playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
        return 1;
    }
    return 2;
}

function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "You win the game. Go on and do great things.";
    }
    if (computerScore > playerScore) {
        return "You didn't win this time, but it's just a game";
    }
    else {
        return "You all tied. That's kind of funny."
    }
}

let checkforWinner = () => {
    if (playerScore == 5 || computerScore == 5) {
        return true;
    }
    else {
        return false;
    }
};


function game(e) {
    let winner = parseInt(playGame(e.target.id, getComputerChoice()))
    switch (winner) {
        case 0:
            break;
        case 1:
            playerScore++;
            break;
        case 2:
            computerScore++;
            break;
        default:
            break;
    }
    addRoundInfo();
}

function addRoundInfo() {

    const mainContainer = document.querySelector(".main-container");
    const roundInfo = document.createElement("p");
    roundInfo.innerText = `Player round win count: ${playerScore} | Computer round win Count: ${computerScore}`;
    mainContainer.appendChild(roundInfo);
    //reset after win.
    if (checkforWinner()) {
        const mainContainer = document.querySelector(".mainContain");
        const roundInfo = document.createElement("p");
        roundInfo.innerText = "There was a winner. I'm going to reset it now."
        mainContainer.appendChild(roundInfo);
        playerScore = 0;
        computerScore = 0;
    }
}

function removeRoundInfo() {
    const mainContainer = document.querySelector(".main-container");
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    playerScore = 0;
    computerScore = 0;
}

const btns = document.querySelectorAll(".playButton");
btns.forEach(btn => btn.addEventListener('click', game));

const clearBtns = document.querySelector("#clearButton");
clearBtns.addEventListener('click', removeRoundInfo);