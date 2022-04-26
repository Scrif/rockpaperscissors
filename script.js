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
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}
       
       let buttons = document.querySelectorAll(".button");
       const body = document.querySelector("body");
       const main = document.querySelector("main");
       const container = document.querySelector("#results-container");
       const retryButton = document.querySelector("#retry-button");
       const endAlert = document.querySelector("end-alert");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();

        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
    });
});

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