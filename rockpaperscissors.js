const hands = ['rock', 'paper', 'scissors'];
const playerWinsMessage = "Player wins and computer loses";
const computerWinsMessage = "Computer wins and player loses"; 
const tieMessage = "It's a draw";
const errorMessage = `Please input 'rock' 'paper' or 'scissors'`;

let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const handIndex = Math.floor(Math.random() * hands.length)
    return hands[handIndex];
}

function askPlayerForSelection() {
    var playerSelection = window.prompt("Rock, Paper or Scissors?").toLowerCase();
    
    while (!hands.includes(playerSelection)) {
        console.error("Invalid selection.")
        var playerSelection = window.prompt("Rock, Paper or Scissors?").toLowerCase();
    }

    return playerSelection;
}

function playRound() {
    var computerSelection = computerPlay();
    var playerSelection = askPlayerForSelection();
  
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log(playerWinsMessage);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        console.log(computerWinsMessage);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        console.log(computerWinsMessage);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log(playerWinsMessage);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log(playerWinsMessage);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log(computerWinsMessage);
    } else if (playerSelection === computerSelection) {
        console.log(tieMessage);
    }
}

while(roundsPlayed < 5) {
    roundsPlayed++;
    var winner = playRound();
}

if (playerScore > computerScore) {
    console.log("PLAYER WINS!");
}
else if (computerScore > playerScore) {
    console.log("COMPUTER WINS");
}
else {
    console.log("THIS IS A HIGHLY UNUSUAL TIE!");
}
