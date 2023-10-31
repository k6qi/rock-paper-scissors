
let playerInput = prompt("Enter your choice!").toLowerCase();
console.log(playerInput);

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let move = Math.floor(Math.random() * choices.length );
    return choices[move];
}
const computerSelection = getComputerChoice();
const playerChoice = "rock";

let playerScore = 0;
let computerScore= 0;

function playRound(playerSelection, computerSelection){
    
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        let resultWon = `You won! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}.`;
        playerScore++;
        console.log(resultWon);
        return resultWon;
    }
    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ){
        let resultLost = `You lost! ${computerSelection[0].toUpperCase() + computerSelection.slice(1) } beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
        computerScore++;
        console.log(resultLost)
        return resultLost;
    }
    if (playerSelection === computerSelection){
        let resultTie = "Its a tie!";
        console.log(resultTie)
        
        return resultTie;
        
    }
}

function game(){
    for(let i=1; i<=5;i++){
        playRound(playerChoice,getComputerChoice());
    }
}


game();
console.log(`Player Score : ${playerScore}`);
console.log(`Computer Score ${computerScore}`);