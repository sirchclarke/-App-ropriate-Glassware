////////////////////////////////
// Global Variables Here
const state={
beginMatch: false,
selections: 0,
totalSelected: 0,
totalTime: 0,
loop: null
}
let playerXWins = queryParams.get('playerXWins')
let playerOWins = queryParams.get('playerOWins')
if (!playerXWins) {
  playerXWins = 0
}
if (!playerOWins) {
  playerOWins = 0
}
console.log(playerXWins)

}

////////////////////////////////
// Functions For Game Logic Here
const selectors ={
 grid = document.querySelector('.grid')
selection=document.querySelector('.selection')
clock=document.querySelector('.clock')
restartButton = document.getElementById('restartButton')

const gridContent = document.getElementById('grid')
const winMessageText = document.getElementById('winMessageText')
const winMessageContent = document.getElementById('winMessage')
const youTurnText = document.getElementById('youTurnText')
const gWins = document.getElementById('gWins')
const cWins = document.getElementById('cWins')
const restartButton = document.getElementById('restartButton')
}
////////////////////////////////
// Event Listeners Here
gWins.innerText = playerXWins

cWins.innerText = playerOWins
// startgame

function startGame() {
  Player_O_Turn = false
  // winMessageContent.classList.remove('show')

  cellContent.forEach((cell) => {
    cell.classList.remove(Player_X_Class)
    cell.classList.remove(Player_O_Class)
    cell.removeEventListener('click', handleCellClick)
    cell.addEventListener('click', handleCellClick, { when: true })
  })
}
function reload() {
  // window.location.reload()
  //key values
  let params = [
    'playerXWins=' + playerXWins.toString(),
    'playerOWins=' + playerOWins.toString()
  ]
  console.log(playerXWins, playerOWins, params)
  // Reload creating visual studio
  window.location.href =
    'http://' +
    window.location.host +
    window.location.pathname +
    '?' +
    params.join('&')
}
startGame()
// const playGame = () => {
//   const name = prompt('Hello, What is your name?')
// }
restartButton.addEventListener('click', reload)

function handleCellClick(e) {
  const cell = e.target
  console.log('click')
  currentClass = Player_O_Turn ? Player_O_Class : Player_X_Class
  makeMove(cell, currentClass)

  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
  }
  youTurn()
}

// cellclick

//WinorDraw
function endGame(draw) {
  if (draw) {
    winMessageText.innerText = 'Draw!'
  } else {
    winMessageText.innerText = `Player ${
      Player_O_Turn ? 'Casey Becker' : 'Ghostface'
    } Wins!`
    if (Player_O_Turn) {
      playerOWins++
    } else {
      playerXWins++
    }
    winMessageContent.classList.add('show')
  }
}

function isDraw() {
  return [...cellContent].every((cell) => {
    return (
      cell.classList.contains(Player_X_Class) ||
      cell.classList.contains(Player_O_Class)
    )
  })
}
function makeMove(cell, currentClass) {
  cell.classList.add(currentClass)
}
// if (0 === ifPlayer_O_Turn) {
//   alert('Begin the Game. Ghostface its your turn!')
// }

function youTurn() {
  if (currentClass === Player_X_Class) {
    console.log(currentClass)
    youTurnText.innerText = 'CASEY TURN.'
  } else if (currentClass === Player_O_Class) {
    console.log(currentClass)
    youTurnText.innerText = 'GHOSTFACE TURN.'
  }
}
// function counter(){
//   if (winMessageText.innerText = `Player ${
//     Player_O_Turn ? 'Ghostface'
//   } Wins!` === number+1
// }

function swapTurns() {
  Player_O_Turn = !Player_O_Turn
}

//WinorDraw
function checkWin(currentClass) {
  return Winning_Outcomes.some((combination) => {
    return combination.every((index) => {
      return cellContent[index].classList.contains(currentClass)
    })
  })
}
////////////////////////////////