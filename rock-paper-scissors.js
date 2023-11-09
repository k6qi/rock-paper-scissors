let playerScore = 0;
let computerScore= 0;
const choicesContainer = document.querySelector('.choices-container');
const choicePaper = document.querySelector('#choices-paper')
const choiceRock= document.querySelector('#choices-rock')
const choiceScissors = document.querySelector('#choices-scissors')
const score = document.querySelector('#score-header');
const announcerText = document.querySelector("#announcer-text");

const restartGame = document.createElement('div');
restartGame.classList.add('restart-game');

restartGame.addEventListener('click', e=>{
    endGame();
})

function endGame(){
    location.reload();
}

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let move = Math.floor(Math .random() * choices.length );
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
            announcerText.innerHTML = resultWon;
            checkWin();
           
        }
        if (
            (computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")
        ){
            let resultLost = `You lost! ${computerSelection[0].toUpperCase() + computerSelection.slice(1) } beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
            computerScore++;
            score.innerHTML= `Player: ${playerScore} Computer: ${computerScore}`
            announcerText.innerHTML = resultLost;
            checkWin();
        }
        if (playerSelection === computerSelection){
            let resultTie = "Its a tie!";
            announcerText.innerHTML = resultTie;
        } 
    } else{
        
    }
}
    

function checkWin(){
    if (playerScore === 5) {
        announcerText.innerHTML = "You WON against the computer! Congratulations!"
        restartGame.textContent = "Restart Game";
        choicesContainer.insertAdjacentElement("afterend",restartGame);        
        

    }
    if (computerScore === 5){
        announcerText.innerHTML = "You LOST against the computer! Better luck next time!"
        restartGame.textContent = "Restart Game";
        choicesContainer.insertAdjacentElement("afterend",restartGame);        
        
    }

}
