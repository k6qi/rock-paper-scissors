
function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let move = Math.floor(Math.random() * choices.length );
    return choices[move];
}


function playRound(playerSelection, computerSelection){
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log("Player has won!")
    }
    if (
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")
    ){
        console.log("Computer has won!")
    }
}