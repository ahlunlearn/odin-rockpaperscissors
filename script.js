let choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
}

function capitalize(str){
    let lower_str = str.toLowerCase()
    let first_letter = lower_str.slice(0,1)
    let other_letters = lower_str.slice(1)
    let cap = first_letter.toUpperCase()
    return cap + other_letters
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = capitalize(playerSelection)
    while(!choices.includes(playerChoice)){
        playerSelection = prompt('Please type rock, paper or scissors')
        playerChoice = capitalize(playerSelection)
    }
    if(playerChoice === computerSelection){
        console.log('Tie!')
        return 0
    } else if ((playerChoice === 'Rock' && computerSelection === 'Scissors')||(playerChoice === 'Paper' && computerSelection === 'Rock')||(playerChoice === 'Scissors' && computerSelection === 'Paper')){
        console.log(`You win! ${playerChoice} beats ${computerSelection}`)
        return 1
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerChoice}`)
        return -1
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0
    for(let i = 1; i <= 5; i++){
        console.log(`Round ${i}`)
        let player = prompt('Please type in rock paper or scissors')
        let computer = getComputerChoice()
        let result = playRound(player, computer)
        if(result === 1){
            playerScore++
        } else if (result === -1){
            computerScore++
        }
    }
    console.log(`Player v.s. Computer \n${playerScore}:${computerScore}`)
}

game()