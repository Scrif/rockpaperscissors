// Script that controls rock-paper-scissors game

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let roundWinner = '';
    
function computerPlay() {
    var choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

const computerSelection = computerPlay()
playRound(playerSelection, computerSelection)
updateChoices(playerSelection, computerSelection)
updateScore()

// Contains the logic to check the winner of a round

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie"
    }
    if (
        (playerSelection == "rock" && computerSelection == "Scissors") ||
        (playerSelection == "scissors" && computerSelection == "Paper") ||
        (playerSelection == "paper" && computerSelection == "Rock")
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (playerSelection == "scissors" && computerSelection == "Rock") ||
        (playerSelection == "paper" && computerSelection == "Scissors") ||
        (playerSelection == "rock" && computerSelection == "Paper")
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreText(roundWinner, playerSelection, computerSelection)
}

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    }   else if (roundWinner === 'player') {
        scoreInfo.textContent = "You won the round!"
    }   else if (roundWinner === 'computer') {
        scoreInfo.textContent = "You lost the round..."
    }
}

playerScoreText.textContent = "You: ${playerScore}"
computerScoreText.textContent = "Computer: ${computerScore}"

function updateScoreText(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)}
        beats ${computerSelection.toLowerCase()}`
        return
    }
    if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)}
        is beaten by ${computerSelection.toLowerCase()}`
        return
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function endGameCheck () {
    return playerScore === 5 || computerScore === 5
}

function displayEndgameMessage() {
    return playerScore > computerScore
    ? (endgameMsg.textContent = "Congratulations! You won the game!")
    : (endgameMsg.textContent = "Oh no.... You lost the game.")
}

function newGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = "Choose your sign!"
    scoreMessage.textContent = "First to 5, wins the game!"
    playerScoreText.textContent = "Player: 0"
    computerScoreText.textContent = "Computer: 0"
    playerPick.textContent = "?"
    computerPick.textContent = "?"
}

const scoreBoard = document.getElementById('scoreBoard')
const scoreMessage = document.getElementById('scoreMessage')
const playerScoreInfo = document.getElementById('playerScore')
const computerScoreInfo = document.getElementById('computerScore')
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const retryButton = document.getElementById('retry-button')
const endgameMsg = document.getElementById('endgameMsg')

rockButton.addEventListener('click'), () => handleClick('rock')
paperButton.addEventListener('click'), () => handleClick('paper')
scissorsButton.addEventListener('click'), () => handleClick('scissors')
retryButton.addEventListener('click', restartGame)

function declareWinner() {
    if (playerScore > computerScore) {
        endDesc.textContent = (`Congratulations! You're the winner!`);
    }  else {
        endDesc.textContent = (`You lost...`);
    };
};
