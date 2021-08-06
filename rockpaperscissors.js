const possibleSelections = ['rock', 'paper', 'scissors'];
const playerWinsMessage = "Player wins and computer loses";
const computerWinsMessage = "Computer wins and player loses"; 
const tieMessage = "It's a draw";
const errorMessage = `Please input 'rock' 'paper' or 'scissors'`;

let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const handIndex = Math.floor(Math.random() * possibleSelections.length)
    return possibleSelections[handIndex];
}

function askPlayerForSelection() {
    var playerSelection = window.prompt("Rock, Paper or Scissors?").toLowerCase();
    
    while (!possibleSelections.includes(playerSelection)) {
        console.error("Invalid selection.")
        var playerSelection = window.prompt("Rock, Paper or Scissors?").toLowerCase();
    }

    return playerSelection;
}

function recordWinner(winner) {
    if (winner === "player") {
        playerScore++;
        console.log(playerWinsMessage);
    }
    else if (winner === "computer") {
        computerScore++;
        console.log(computerWinsMessage);
    }
    else {
        console.log(tieMessage);
    }
}

function playRound() {
    var computerSelection = computerPlay();
    var playerSelection = askPlayerForSelection();
  
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        recordWinner('player')   
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        recordWinner('player')
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        recordWinner('player')
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        recordWinner('computer')
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        recordWinner('computer')
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        recordWinner('computer')
    } else if (playerSelection === computerSelection) {
        recordWinner('none')
    }
}

while(roundsPlayed < 5) {
    roundsPlayed++;
    playRound();
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
