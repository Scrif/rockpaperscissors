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

const scoreBoard = document.getElementById('scoreBoard')
const scoreMessage = document.getElementById('scoreMessage')
const playerScoreInfo = document.getElementById('playerScore')
const computerScoreInfo = document.getElementById('computerScore')
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const retryButton = document.getElementById('retry-button')

rockButton.addEventListener('click'), () => handleClick('rock')
paperButton.addEventListener('click'), () => handleClick('paper')
scissorsButton.addEventListener('click'), () => handleClick('scissors')
retryButton.addEventListener('click', restartGame)

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         const img = button.querySelector("img");
//         playerSelection = img.alt.toLowerCase();

//         playRound(playerSelection, computerSelection);

//         if (playerScore === 5 || computerScore === 5) {
//             declareWinner();
//         }
//     });
// });

function declareWinner() {
    if (playerScore > computerScore) {
        endDesc.textContent = (`Congratulations! You're the winner!`);
    }  else {
        endDesc.textContent = (`You lost...`);
    };
};



       
//        function game() {
//            for (let i = 0; i < 5; i++) {
//                let playerSelection = prompt('Enter your choice: Rock, Paper, or Scissors')
//                playerSelection = playerSelection.toLowerCase();
//                const computerSelection = computerPlay();
//                console.log(playRound(playerSelection, computerSelection));
//            }
//            if (playerScore > computerScore) {
//                console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
//            } else if (computerScore > playerScore) {
//                console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
//            } else
//                console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
//        }
//
//        game();