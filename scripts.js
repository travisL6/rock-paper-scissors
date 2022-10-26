let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('button');

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    return choices[~~(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {

        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again';
            disableButtons();
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
    }
    else {
        computerScore += 1;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

        if (computerScore == 5) {
            result += '<br><br>The computer won the game! Reload the page to play again';
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function removeResults() {
    document.getElementById('result').innerHTML = "";
    playerScore = 0;
    computerScore = 0;
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value);
    })
})
const clearBtns = document.querySelector("#clearButton");
clearBtns.addEventListener('click', removeResults);