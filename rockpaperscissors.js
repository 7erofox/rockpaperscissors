
function computerPlay() {
const hands = ['rock', 'paper', 'scissors'];
var computerSelection = Math.floor(Math.random()*hands.length);
return computerSelection.toLowerCase;
}

var playerSelection = window.prompt.toLowerCase("Rock, Paper or Scissors?");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors')
        return "Player wins and computer loses";
    else if (playerSelection === 'rock' && computerSelection === 'paper')
        return "Computer wins and player loses";
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
        return "Computer wins and player loses";
    else if (playerSelection === 'paper' && computerSelection === 'rock')
        return "Player wins and computer loses";
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
        return "Player wins and computer loses";
    else if (playerSelection === 'scissors' && computerSelection === 'rock')
        return "Computer wins and player loses";
    else return "It's a draw";
}

  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

