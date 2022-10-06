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
//////////////////////////////
class Tile {
  constructor(name, url, pair) {
    this.name = name
    this.url = url
    this.pair = pair
  }
}

//Objects for Beers
const beers = [
  new Tile('kolsch', 'url', 'stange'),
  new Tile('saison', 'url', 'tulip'),
  new Tile('marzen', 'url', 'stein'),
  new Tile('trappist', 'url', 'chalice'),
  new Tile('hefeweizen', 'url', 'weizenglass'),
  new Tile('ipa', 'url', 'spiegelau'),
  new Tile('lambic', 'url', 'tumbler'),
  new Tile('bitter', 'url', 'nonic')
]
////////////////////////////////
//Objects for Glassware
const glass = [
  new Tile('stange', 'url', 'kolsch'),
  new Tile('tulip', 'url', 'saison'),
  new Tile('stein', 'url', 'marzen'),
  new Tile('trappist', 'url', 'chalice'),
  new Tile('weizenglass', 'url', 'hefeweizen'),
  new Tile('spiegelau', 'url', 'ipa'),
  new Tile('tumbler', 'url', 'lambic'),
  new Tile('nonic', 'url', 'bitter')
]

//function for pairmatch
const checkIsMatch = (tile1, tile2) => {
  if (tile1.id === tile2.innerText) {
    return true
  }
  return false
}
// const glassBeersMap = {
//   stange: 'kolsch',
//   tulip: 'saison',
//   stein: 'marzen',
//   chalice: 'trappist',
//   weizenglass: 'hefeweizen',
//   spiegelau: 'ipa',
//   tumbler: 'lambic',
//   nonic: 'bitter'
// }
// const beersGlassMap = {
//   kolsch: 'stange',
//   saison: 'tulip',
//   marzen: 'stein',
//   trappist: 'chalice',
//   hefeweizen: 'weizenglass',
//   ipa: 'spiegelau',
//   lambic: 'tumbler',
//   bitter: 'nonic'
// }
/////////////////////////////////
//Arrays for functions
// const beers = [
//   kolsch,
//   saison,
//   marzen,
//   trappist,
//   hefeweizen,
//   ipa,
//   lambic,
//   bitter
// ]

// const glass = [
//   stange,
//   tulip,
//   stein,
//   chalice,
//   weizenglass,
//   spiegelau,
//   tumbler,
//   nonic
// ]

////////////////////////////////
//Defined variables Game Logic Here

const gridContainer = document.querySelector('.grid-container')
const grid = document.querySelector('.grid')
const selection = document.querySelector('.selection')
const clickGrid = document.querySelector('.clickGrid')
// clock: document.querySelector('.clock'),

// restartButton: document.getElementById('restartButton'),
const win = document.querySelector('.win')
const start = document.querySelector('button')

let img
let cellId = []
let cellsSelected = []
let cellsPaired = 0
let clicks = 0
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
// document.addEventListener('loadGame',
//   function () {
//     arrangeCell()
//     playAgain.addEventListener('click', replay)

///click function for img
imgs = document.querySelectorAll('img')
Array.from(imgs).forEach((img) => img.addEventListener('click', flipCell))

////////////////////////////////
// Shuffling through
// const pullsRandom = (array, items) => {
//   const cloneArray = [...array]
//   const randomPulls = []
//   for (let index = 0; index < items; index++) {
//     const randomIndex = Math.floor(math.random() * cloneArray.length)
//     randomPulls.push(cloneArray[randomIndex])
//     cloneArray.splice(randomIndex, 1)
//   }
//   return randomPulls
// }

// const shuffle = (array) => {
//   const cloneArray = [...array]

//   for (let index = cloneArray.length - 1; index > 0; index--) {
//     const randomIndex = Math.floor(Math.random() * (index + 1))
//     const original = cloneArray[index]

//     cloneArray[index] = cloneArray[randomIndex]
//     cloneArray[randomIndex] = original
//   }

//   return cloneArray
// }

/////////////////////////
// Event Listener
// const eventListeners = () => {
//   document.addEventListener('click', (event) => {
//     const actionTaken = action.Taken
//     const actionParent = actionTaken.parentElement

//     if (
//       actionTaken.className.includes('bstyle') &&
//       !actionParent.className.includes('blank')
//     ) {
//       blankStyle(actionParent)
//     } else if (
//       actionTaken.nodeName === 'BUTTON' &&
//       !actionTaken.className.includes('disabled')
//     ) {
//       startGame()
//     }
//   })
// }
// generateGame()
// attacheventListeners()

//////////////////////////
//// Start game
// const startGame = () => {
//   state.gameStart = true
//   selectors.start.classList.add('disabled')

//   state.loop = setInterval(() => {
//     state.totalTime++

//     selectors.selection.innerText = `${state.totalSelected} move`
//     selectors.clock.innerText = `time:${state.totalTime} sec`
//   }, 1000)
// }
///////////////////////
/// cellAppears
// const cellAppear = (bstyle) => {
//   state.selections++
//   state.totalSelected++

//   if (!state.gameStarted) {
//     startGame()
//   }
//   if (state.selections <= 2) {
//     bstyle.classList.add('appeared')
//   }
//   if (state.selections === 2) {
//     const selections = document.querySelectorAll('.appeared:not(.matched')

//     if (selections[0].innerText === selections[1].innerText) {
//       selections[0].classList.add('matched')
//       selections[1].classList.add('matched')
//     }
//     setTimeout(() => {
//       disappearCells()
//     }, 1000)
//   }
// }

/////////////////////////
////

// const disappearCells = () => {
//   document.querySelectorAll('.bstyle:not(.matched)').forEach((bstyle) => {
//     bstyle.classList.remove('appeared')
//   })
//   state.selections = 0
// }
//////////////////////////
//winnin
// if (!document.querySelectorAll('.bstyle:not(.appeared').length) {
//   setTimeout(() => {
//     selectors.gridContainer.classList.add('appeared')
//     selectors.win.innerHTML = `
//     <span class="win-text">
//       Mastered!<br/>
//       with <span class="highlight">${state.totalSelected}</span> selection<br />
//       under <span class="highlight">${state.totalTime}</span> seconds </span>`
//     clearInterval(state.loop)
//   }, 1000)
// }
const container = document.getElementById('container')

function makeRows(array1, array2) {
  const items = [...array1, ...array2]
  console.log(container)
  container.style.setProperty('--grid-rows', items.length / 4)
  container.style.setProperty('--grid-cols', items.length / 4)
  for (i = 0; i < items.length; i++) {
    let cell = document.createElement('div')
    cell.innerText = items[i].name
    cell.id = items[i].pair
    container.appendChild(cell).className = 'grid-item'
  }
}

makeRows(beers, glass)

////////
//Grid-works
document.addEventListener('DOMContentLoaded', function () {
  // arrangeCell()
  // playAgain.addEventListener('click', replay)
  ///click function for img
  //   imgs = document.querySelectorAll('img')
  //   Array.from(imgs).forEach((img) => img.addEventListener('click', flipCell))
})

//Arrange cellContent
// function arrangeCell() {
//   beers, glass.sort(() => 0.5 - Math.random())
// }
// Flipping Cells
const gridItems = document.querySelectorAll('.grid-item')

gridItems.forEach((item) => {
  item.addEventListener('click', flipCell)
})

function flipCell(e) {
  cellsSelected.push(e.target)
  e.target.classList.add('flip')
  // e.target.setAttribute('src', [selected].img)
  if (cellsSelected.length === 2) {
    //     cardsWon += 1;
    // scoreBoard.innerHTML = cardsWon;
    // setTimeout(checkWon,500)
    if (checkIsMatch(cellsSelected[0], cellsSelected[1])) {
      alert
    } else {
      //       imgs[firstCard].setAttribute("src", "blank.png");
      // imgs[secondCard].setAttribute("src", "blank.png"); alert("wrong, please try again"); imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip");
      console.log('not a match')
    }
    //     cardsSelected = [];
    // cardsId = [];
    // clicks += 1;
    // clickBoard.innerHTML = clicks;
    //
  }
}
// setTimeout(checkIsMatch, 500)

//////Pair Check

// Generating the grid

//   const items = shuffle([...beers, ...glass])
//   const flashes = `
// <div class="grid" style="grid-template-columns: repeat${dimensions}, auto)">
// ${items
//   .map(
//     (item) => `
//  <div class="bstyle">
//  <div class"bstyle-face"></div>
//  <div class"bstyle-blank">${item}</div>
//  </div>

//    `
//   )
//   .join('')}
//    </div>
// `
// const forEach
//   const parser = new DOMParser().parseFromString(flashes, 'index/html')
//   selectors.grid.replaceWith(parser.querySelector('.grid'))
// }

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
