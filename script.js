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
    if(!choices.includes(playerChoice)){
        return 'Please type rock, paper or scissors'
    } else if(playerChoice === computerSelection){
        return 'Tie!'
    } else if ((playerChoice === 'Rock' && computerSelection === 'Scissors')||(playerChoice === 'Paper' && computerSelection === 'Rock')||(playerChoice === 'Scissors' && computerSelection === 'Paper')){
        return `You win! ${playerChoice} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerChoice}`
    }
}

let player = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(player, computerSelection));