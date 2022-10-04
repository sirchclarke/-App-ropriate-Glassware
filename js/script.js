////////////////////////////////
// Global Variables Here
const state = {
  beginMatch: false,
  selections: 0,
  totalSelected: 0,
  totalTime: 0,
  loop: null
}
// let playerXWins = queryParams.get('playerXWins')
// let playerOWins = queryParams.get('playerOWins')
// if (!playerXWins) {
//   playerXWins = 0
// }
// if (!playerOWins) {
//   playerOWins = 0
// }
// console.log(playerXWins)

// }
////////////////////////////////
//Objects for Beers
const kolsch = {
  group: 'a',
  glass: stange
}
const saison = {
  group: 'b',
  glass: tulip
}
const marzen = {
  group: 'c',
  glass: stein
}
const trappist = {
  group: 'd',
  glass: chalice
}
const hefeweizen = {
  group: 'e',
  glass: weizenglass
}
const ipa = {
  group: 'f',
  glass: spiegelau
}
const lambic = {
  group: 'g',
  glass: tumbler
}
const bitter = {
  group: 'h',
  glass: nonic
}

////////////////////////////////
//Objects for Glassware

const stange = {
  group: 'a',
  beer: kolsch
}
const tulip = {
  group: 'b',
  beer: saison
}
const stein = {
  group: 'c',
  beer: marzen
}
const chalice = {
  group: 'd',
  beer: trappist
}
const weizenglass = {
  group: 'e',
  beer: hefeweizen
}
const spiegelau = {
  group: 'f',
  beer: ipa
}
const tumbler = {
  group: 'g',
  beer: lambic
}
const nonic = {
  group: 'h',
  beer: bitter
}

/////////////////////////////////
//Arrays for functions
const beers = [
  'kolsch',
  'saison',
  'marzen',
  'trappist',
  'hefeweizen',
  'ipa',
  'lambic',
  'bitter'
]

const glass = [
  'stange',
  'tulip',
  'stein',
  'chalice',
  'weizenglass',
  'spiegelau',
  'tumbler',
  'nonic'
]

////////////////////////////////
// Functions For Game Logic Here
const selectors = {
  grid: document.querySelector('.grid'),
  selection: document.querySelector('.selection'),
  clock: document.querySelector('.clock'),
  restartButton: document.getElementById('restartButton')
}

// const gridContent = document.getElementById('grid')
// const winMessageText = document.getElementById('winMessageText')
// const winMessageContent = document.getElementById('winMessage')
// const youTurnText = document.getElementById('youTurnText')
// const gWins = document.getElementById('gWins')
// const cWins = document.getElementById('cWins')
// const restartButton = document.getElementById('restartButton')

////////////////////////////////
// Event Listeners Here
// gWins.innerText = playerXWins

// cWins.innerText = playerOWins
////////////////////////////////
// Generating the grid
const startApp = () => {
  const dimensions = selectors.grid.getAttribute('data-dimension')
  if (dimensions % 2 !== 0) {
    throw new Error('dimensions must be even')
  }

  const pairs = [beers, glass]
  const pulls = pullsRandom(pairs, (dimensions * dimensions) / 2)
  const items = shuffle([...pulls, ...pulls])
  const flashes = `
<div class="grid" style="grid-template-columns: repeat${dimensions}, auto)">
${items
  .map(
    (item) => `
 <div class="bstyle">
 <div class"bstyle-face"></div>
 <div class"bstyle-blank">${item}</div>
 </div>

   `
  )
  .join('')}
   </div>
`
  const parser = new DOMParser().parseFromString(flashes, 'index/html')
  selectors.grid.replaceWith(parser.querySelector('.grid'))
}

////////////////////////////////
// Shuffling through
const pullsRandom = (array, items) => {
  const cloneArray = [...array]
  const randomPulls = []
  for (let index = 0; index < items; index++) {
    const randomIndex = Math.floor(math.random() * clonedArray.length)
    randomPulls.push(cloneArray[randomIndex])
    clonedArray.splice(randomIndex, 1)
  }
  return randomPulls
}

const shuffle = (array) => {
  const cloneArray = [...array]

  for (let index = cloneArray.length - 1; index > 0; index--) {
    const randomPulls = Math.floor(Math.random() * (index + 1))
    const original = cloneArray[index]

    cloneArray[index] = cloneArray[randomIndex]
    cloneArray[randomIndex] = original
  }

  return clonedArray
}
// function startGame() {
//   Player_O_Turn = false
//   // winMessageContent.classList.remove('show')

//   cellContent.forEach((cell) => {
//     cell.classList.remove(Player_X_Class)
//     cell.classList.remove(Player_O_Class)
//     cell.removeEventListener('click', handleCellClick)
//     cell.addEventListener('click', handleCellClick, { when: true })
//   })
// }
// function reload() {
//   // window.location.reload()
//   //key values
//   let params = [
//     'playerXWins=' + playerXWins.toString(),
//     'playerOWins=' + playerOWins.toString()
//   ]
//   console.log(playerXWins, playerOWins, params)
//   // Reload creating visual studio
//   window.location.href =
//     'http://' +
//     window.location.host +
//     window.location.pathname +
//     '?' +
//     params.join('&')
// }
// startGame()
// // const playGame = () => {
// //   const name = prompt('Hello, What is your name?')
// // }
// restartButton.addEventListener('click', reload)

// function handleCellClick(e) {
//   const cell = e.target
//   console.log('click')
//   currentClass = Player_O_Turn ? Player_O_Class : Player_X_Class
//   makeMove(cell, currentClass)

//   if (checkWin(currentClass)) {
//     endGame(false)
//   } else if (isDraw()) {
//     endGame(true)
//   } else {
//     swapTurns()
//   }
//   youTurn()
// }

// // cellclick

// //WinorDraw
// function endGame(draw) {
//   if (draw) {
//     winMessageText.innerText = 'Draw!'
//   } else {
//     winMessageText.innerText = `Player ${
//       Player_O_Turn ? 'Casey Becker' : 'Ghostface'
//     } Wins!`
//     if (Player_O_Turn) {
//       playerOWins++
//     } else {
//       playerXWins++
//     }
//     winMessageContent.classList.add('show')
//   }
// }

// function isDraw() {
//   return [...cellContent].every((cell) => {
//     return (
//       cell.classList.contains(Player_X_Class) ||
//       cell.classList.contains(Player_O_Class)
//     )
//   })
// }
// function makeMove(cell, currentClass) {
//   cell.classList.add(currentClass)
// }
// // if (0 === ifPlayer_O_Turn) {
// //   alert('Begin the Game. Ghostface its your turn!')
// // }

// function youTurn() {
//   if (currentClass === Player_X_Class) {
//     console.log(currentClass)
//     youTurnText.innerText = 'CASEY TURN.'
//   } else if (currentClass === Player_O_Class) {
//     console.log(currentClass)
//     youTurnText.innerText = 'GHOSTFACE TURN.'
//   }
// }
// // function counter(){
// //   if (winMessageText.innerText = `Player ${
// //     Player_O_Turn ? 'Ghostface'
// //   } Wins!` === number+1
// // }

// function swapTurns() {
//   Player_O_Turn = !Player_O_Turn
// }

// //WinorDraw
// function checkWin(currentClass) {
//   return Winning_Outcomes.some((combination) => {
//     return combination.every((index) => {
//       return cellContent[index].classList.contains(currentClass)
//     })
//   })
// }
////////////////////////////////
