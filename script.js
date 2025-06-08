const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
  return computerChoice = options[Math.floor(Math.random() * options.length)];
}

/* function getHumanChoice() {
  let humanChoice = prompt("Choose Rock, Paper or Scissors?");
  
  while(humanChoice == null) {
    humanChoice = prompt("Choose Rock, Paper or Scissors?");
  }
  humanChoice = humanChoice.toLowerCase();

  let check = validateHumanChoice(humanChoice);

  function validateHumanChoice() {
    if(options.includes(options.length)) {
      return true
    } else {
      return false
    }
  }
  
  if(check == true) {
    console.log(humanChoice);
  } */

/*   return humanChoice;
 */
  /* if (humanChoice === "Rock" || "rock") {
    console.log("Rock")
  } 
  else if (humanChoice == "Paper" || "paper") {
    console.log("Paper")
  } 
  else  {
    console.log("Scissor")
  } */




console.log(getComputerChoice())