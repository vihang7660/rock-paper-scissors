function computerPlay(guess) {
    return guess[Math.floor(Math.random()*guess.length)]
}


function play(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerPlay(['Rock', 'Paper', 'Scissor']) == 'Scissor') {
        return 'Player won, Rock beats Scissor'
    }   else if (playerSelection == 'Scissor' && computerPlay(['Rock', 'Paper', 'Scissor']) == 'Paper') {
        return 'Player won, Scissor beats Paper'
    }   else if (playerSelection == 'Paper' && computerPlay(['Rock', 'Paper', 'Scissor']) == 'Rock') {
        return 'Player won, Paper beats Rock'
    }   else if (playerSelection == computerPlay(['Rock', 'Paper', 'Scissor'])) {
        return 'It\'s a tie'
    }   else {
        return 'Computer won'
    }
}




function game() {
    let playerPoints = 0
    let computerPoints = 0
    let tieGames = 0
    for (let i = 0; i < 5; i = i + 1 ) {
        let playerSelection = prompt('Rock, Paper or Scissor')
        let result = play(playerSelection, computerPlay(['Rock', 'Paper', 'Scissor']))
        console.log(result)
        if (result === 'Player won, Rock beats Scissor' ||result ===  'Player won, Scissor beats Paper' ||result ===   'Player won, Paper beats Rock') {
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

console.log(game())