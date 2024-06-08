const choices = document.querySelectorAll(".choice")
const result = document.querySelector(".result")
const playerScore = document.querySelector(".computerGamesWon span")
const computerScore = document.querySelector(".playerGamesWon span")
const leadingPlayer = document.querySelector(".leadingPlayer span")

let playerScoreCount = 0;
let computerScoreCount = 0;

choices.forEach(choice => {
   choice.addEventListener("click", ()=> {
     const playerChoice = choice.dataset.choice;
     const computerChoice = getComputerChoice();
     const winner = getWinner(playerChoice,computerChoice);
     result.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${winner}`;

     if(winner === "You win!") {
        playerScoreCount++;
     }else if (winner === "You lose!") {
        computerScoreCount++;
     }

     playerScore.textContent = playerScoreCount;
     computerScore.textContent = computerScoreCount;

     if(playerScoreCount > computerScoreCount) {
       return leadingPlayer.textContent = `the computer`;
     }else if(playerScoreCount < computerScoreCount) {
       return leadingPlayer.textContent = `You`;
     }else {
       return leadingPlayer.textContent = `not yet found !`;
     }
     
   });
})

function getComputerChoice () {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function getWinner (player, computer) {
   if(player === computer) return "it's a tie!";
   if(player === "rock") {
    return computer === "scissors" ? "You win!" : "You lose!";
   }
   if(player === "paper") {
    return computer === "rock" ? "You win!" : "You lose!";
   }
   if(player === "scissors") {
    return computer === "paper" ? "You win!" : "You lose!";
   }
}


