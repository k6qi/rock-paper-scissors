let playerScore = 0;
let computerScore= 0;

const choicePaper = document.querySelector('#choices-paper')
const choiceRock= document.querySelector('#choices-rock')
const choiceScissors = document.querySelector('#choices-scissors')
const score = document.querySelector('#score-header');



function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let move = Math.floor(Math.random() * choices.length );
    return choices[move];
    
}

choiceRock.addEventListener("click", e =>{
    playRound('rock', getComputerChoice());
})

choicePaper.addEventListener("click", e =>{
    playRound('paper', getComputerChoice());
})

choiceScissors.addEventListener("click", e =>{
    playRound('scissors', getComputerChoice());  
})



function playRound(playerSelection, computerSelection){
    if(!(playerScore  >= 5 || computerScore >=5)){
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            let resultWon = `You won! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}.`;
            playerScore++;
            score.innerHTML= `Player: ${playerScore} Computer: ${computerScore}`
            console.log(resultWon);
            console.log(playerScore);
            console.log(computerScore);
            return resultWon;
        }
        if (
            (computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")
        ){
            let resultLost = `You lost! ${computerSelection[0].toUpperCase() + computerSelection.slice(1) } beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
            computerScore++;
            score.innerHTML= `Player: ${playerScore} Computer: ${computerScore}`

            console.log(resultLost)
            console.log(playerScore);
            console.log(computerScore);
    
            return resultLost;
        }
        if (playerSelection === computerSelection){
            let resultTie = "Its a tie!";
            console.log(resultTie)
            console.log(playerScore);
            console.log(computerScore);
            
            return resultTie;
        } 
    } else{
    }
    }
    


// function game(){
//     for(let i=1; i<=5;i++){
//         playRound(playerChoice,getComputerChoice());
//     }
// }

function game(){
    
}
console.log(`Player Score : ${playerScore}`);
console.log(`Computer Score ${computerScore}`);