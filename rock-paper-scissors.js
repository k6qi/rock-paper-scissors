
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let move = Math.floor(Math.random() * choices.length );
    return choices[move];
}
const computerSelection = getComputerChoice();
const playerSelection = "rock";


function playRound(playerSelection, computerSelection){
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        let resultWon = `You won! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}.`;
        return resultWon;
    }
    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ){
        let resultLost = `You lost! ${computerSelection[0].toUpperCase() + computerSelection.slice(1) } beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
        return resultLost;
    }
    if (playerSelection === computerSelection){
        let resultTie = "Its a tie!";
        return resultTie;
        
    }
}


console.log(playRound(playerSelection, computerSelection));

