/*function computerPlay(guess) {
    return guess[Math.floor(Math.random()*guess.length)]
}


function play(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerPlay(['rock', 'paper', 'scissor']) == 'scissor') {
        return 'Player won, rock beats scissor'
    }   else if (playerSelection == 'scissor' && computerPlay(['rock', 'paper', 'scissor']) == 'paper') {
        return 'Player won, scissor beats paper'
    }   else if (playerSelection == 'paper' && computerPlay(['rock', 'paper', 'scissor']) == 'rock') {
        return 'Player won, paper beats rock'
    }   else if (playerSelection == computerPlay(['rock', 'paper', 'scissor'])) {
        return 'It\'s a tie'
    }   else {
        console.log('Computer won')
        return 'Computer won'
    }
}*/




/*function game() {
    let playerPoints = 0
    let computerPoints = 0
    let tieGames = 0
    for (let i = 0; i < 5; i = i + 1 ) {
        let playerSelection = prompt('rock, paper or scissor')
        let result = play(playerSelection, computerPlay(['rock', 'paper', 'scissor']))
        console.log(result)
        if (result === 'Player won, rock beats scissor' ||result ===  'Player won, scissor beats paper' ||result ===   'Player won, paper beats rock') {
            playerPoints = playerPoints + 1
        }   else if (result === 'Computer won') {
            computerPoints = computerPoints + 1
        }   else if (result == 'It\'s a tie') {
            tieGames = tieGames + 1
        }
    }
    console.log(`Player won ${playerPoints} games`)
    console.log(`Computer won ${computerPoints} games`)
    console.log(`${tieGames} games were tied`)

    if (playerPoints > computerPoints) {
        return 'Player Won'
    } else if (computerPoints > playerPoints) {
        return 'Computer Won'
    } else if (computerPoints == playerPoints) {
        return 'It\'s a tie'
    }
}

console.log(game()) */


let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissor = document.querySelector('.scissor')

let playerSelection;


function rockSel() {
    playerSelection = 'rock'
}

function paperSel() {
    playerSelection = 'paper'
}

function scissorSel() {
    playerSelection = 'scissor'
}

rock.addEventListener('click', rockSel)
paper.addEventListener('click', paperSel)
scissor.addEventListener('click', scissorSel)

function computerPlay(guess) {
    return guess[Math.floor(Math.random()*guess.length)]
}


let playerPoints = 0
let computerPoints = 0
let tieGames = 0

function play() {
    if (playerSelection == 'rock' && computerPlay(['rock', 'paper', 'scissor']) == 'scissor') {
        console.log('player won')
        playerPoints++
        return 'Player won, rock beats scissor'
    }   else if (playerSelection == 'scissor' && computerPlay(['rock', 'paper', 'scissor']) == 'paper') {
        console.log('player won')
        playerPoints++
        return 'Player won, scissor beats paper'
    }   else if (playerSelection == 'paper' && computerPlay(['rock', 'paper', 'scissor']) == 'rock') {
        console.log('player won')
        playerPoints++
        return 'Player won, paper beats rock'
    }   else if (playerSelection == computerPlay(['rock', 'paper', 'scissor'])) {
        console.log('tie')
        tieGames++
        return 'It\'s a tie'
    }   else {
        console.log('Computer won')
        computerPoints++
        return 'Computer won'
    }
}

rock.addEventListener('click', play)
paper.addEventListener('click', play)
scissor.addEventListener('click', play)

let div = document.querySelector('div')

function points() {
    if (playerPoints == 5) {
        return div.textContent = 'Player has won'
    }   else if (computerPoints == 5) {
        return div.textContent = 'Computer has won'
    }   else if (tieGames == 5) {
        return div.textContent = `It's a tie`
    }
    return div.textContent = `player score : ${playerPoints}   computer score : ${computerPoints}  tie games : ${tieGames}`
}


rock.addEventListener('click', points)
paper.addEventListener('click', points)
scissor.addEventListener('click', points)