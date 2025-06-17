const options = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

let tie = "It's a Tie";
let player = "You win!";
let computer = "You lose!";



function getComputerChoice() {
  let randomChoice = options[Math.floor(Math.random() * options.length)];
  return randomChoice;
}

function getPlayerChoice() {
  const message = "Choose rock paper or scissors?";
  let playerInput = /* prompt(message).toLowerCase() */ "rock";
  return playerInput;
}

function checkWinner(playerChoice, computerChoice) {
  if(playerChoice === computerChoice) {
    return tie;
  }
  else if(playerChoice === "rock" && computerChoice === "scissors" ||
          playerChoice === "scissors" && computerChoice === "paper" ||
          playerChoice === "paper" && computerChoice === "rock") {
    return player;
  }
  else {
    return computer;
  }
}

function playRound(computerChoice, playerChoice) {
  const result = checkWinner(computerChoice, playerChoice);

  console.log("You choose " + playerChoice);
  console.log("Computer choose " + computerChoice);

  if(result === tie) {
    return tie;
  }
  else if(result === player) {
    return player;
  }
  else {
    return computer;
  }
} 

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

   function gameScore() {
    if(checkWinner(playerChoice, computerChoice) === player) {
      ++playerScore;
    }
    else if(checkWinner(playerChoice, computerChoice) === computer) {
       ++computerScore;
    }
    console.log("Player " + playerScore + ":" + computerScore + " Computer")
  } 
  
  console.log("Welcome!")
  
  for (let i=0; i<5; i++) {
    console.log(playRound(computerChoice, playerChoice))
    console.log(gameScore())
  }

  console.log("Game Over")
  
  if(playerScore > computerScore) {
    console.log("Congrats you won!")
  }
  else if(playerScore < computerScore) {
    console.log("Sorry you lost!")
  }
  else {
    console.log("Hmmm it's a tie!")
  }  
}

console.log(playGame())