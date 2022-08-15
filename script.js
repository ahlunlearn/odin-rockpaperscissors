let choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
}

// function capitalize(str){
//     let lower_str = str.toLowerCase()
//     let first_letter = lower_str.slice(0,1)
//     let other_letters = lower_str.slice(1)
//     let cap = first_letter.toUpperCase()
//     return cap + other_letters
// }

function playRound(playerSelection, computerSelection) {
    const roundResult = document.querySelector('.round')
    let playerChoice = playerSelection
    // while(!choices.includes(playerChoice)){
    //     playerSelection = prompt('Please type rock, paper or scissors')
    //     playerChoice = capitalize(playerSelection)
    // }
    if(playerChoice === computerSelection){
        roundResult.textContent = 'Tie!'
        return 0
    } else if ((playerChoice === 'Rock' && computerSelection === 'Scissors')||(playerChoice === 'Paper' && computerSelection === 'Rock')||(playerChoice === 'Scissors' && computerSelection === 'Paper')){
        roundResult.textContent = `You win! ${playerChoice} beats ${computerSelection}`
        return 1
    } else {
        roundResult.textContent = `You lose! ${computerSelection} beats ${playerChoice}`
        return -1
    }
}

function stringtoIntplustoString(str){
    let score = parseInt(str)
    score ++
    return score.toString()
}

function endgame(){
    disableBtns()
    displayHiddenButton()
}

function disableBtns(){
    const btns = document.querySelectorAll('.btns > button')
    btns.forEach(btn => btn.disabled = true)
}

function displayHiddenButton(){
    const restart = document.querySelector('.restart')
    restart.classList.remove('hidden')
}

function resetSite(){
    const roundResult = document.querySelector('.round')
    const playerScore = document.querySelector('.playerScore')
    const computerScore = document.querySelector('.computerScore')
    roundResult.textContent = ''
    playerScore.textContent = '0'
    computerScore.textContent = '0'
    const btns = document.querySelectorAll('.btns > button')
    btns.forEach(btn => btn.disabled = false)
}

function changeScore(num) {
    if(num === 0) return
    const playerScore = document.querySelector('.playerScore')
    const computerScore = document.querySelector('.computerScore')
    if(num === 1){
        playerScore.textContent = stringtoIntplustoString(playerScore.textContent)
    } else {
        computerScore.textContent = stringtoIntplustoString(computerScore.textContent)
    }
    if (playerScore.textContent === '5'){
        const roundResult = document.querySelector('.round')
        roundResult.textContent = 'You win the game!'
        endgame()
    } else if(computerScore.textContent === '5'){
        const roundResult = document.querySelector('.round')
        roundResult.textContent = 'You lose the game QAQ'
        endgame()
    }
}


const btns = document.querySelectorAll('.btns > button')
btns.forEach(btn => btn.addEventListener('click',(e)=>{
    const roundResult = playRound(e.target.classList.value,getComputerChoice())
    changeScore(roundResult)
}))

const restartbutton = document.querySelector('.restart')
restartbutton.addEventListener('click', resetSite)


// function game(){
//     let playerScore = 0
//     let computerScore = 0
//     for(let i = 1; i <= 5; i++){
//         console.log(`Round ${i}`)
//         let player = prompt('Please type in rock paper or scissors')
//         let computer = getComputerChoice()
//         let result = playRound(player, computer)
//         if(result === 1){
//             playerScore++
//         } else if (result === -1){
//             computerScore++
//         }
//     }
//     console.log(`Player v.s. Computer \n${playerScore}:${computerScore}`)
// }

// game()