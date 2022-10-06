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
  constructor(id, img, pair) {
    this.name = id
    this.url = img
    this.pair = pair
  }
}

//Objects for Beers
const beers = [
  new Tile(
    'kolsch',
    (img.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xq3SO9jg51xR36qy7c9pf1l8H1xiJzRTSlqlResSSOOnvd0aepy7QrkexjrDhy5GNPM&usqp=CAU'),
    'stange'
  ),
  new Tile(
    'saison',
    (img.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_cf_eQ0fnZrdfNJ5MZwYZeT-3hGMx4YdGQ&usqp=CAU'),
    'tulip'
  ),
  new Tile(
    'marzen',
    (img.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QbG4rIAiFTFIa6AYhKVI91wXMdYabMT3RTHsIs6zT5tCQwep5ZWa070FQa677AVGb9A&usqp=CAU'),
    'stein'
  ),
  new Tile(
    'trappist',
    (img.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiis_a5S5YGOo4aS9SN3E1nkbEe4glr1tAZA&usqp=CAU`'),
    'chalice'
  ),
  new Tile(
    'hefeweizen',
    (img.src =
      'https://www.google.com/aclk?sa=l&ai=DChcSEwjHhdCK48X6AhUCB30KHakmBkMYABAFGgJwdg&sig=AOD64_1-Wegl76mpNQD6oeq0UJfP1mnZmA&adurl&ctype=46&ved=2ahUKEwj1tcCK48X6AhUHKVMKHTD_BtcQvhd6BAgBEH8'),
    'weizenglass'
  ),
  new Tile(
    'ipa',
    (img.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xq3SO9jg51xR36qy7c9pf1l8H1xiJzRTSlqlResSSOOnvd0aepy7QrkexjrDhy5GNPM&usqp=CAU'),
    'spiegelau'
  ),
  new Tile(
    'lambic',
    (img.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2o9hK_oH4l9RTbnEbeebhk3i6-4cdsNj4FQ&usqp=CAU'),
    'tumbler'
  ),
  new Tile(
    'bitter',
    (img.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRby7ck-edZlm-WHnRdjDGHSWsySazc3A1FhQ&usqp=CAU'),
    'nonic'
  )
]
////////////////////////////////
//Objects for Glassware
const glass = [
  new Tile('stange', 'url', 'kolsch'),
  new Tile('tulip', 'url', 'saison'),
  new Tile('stein', 'url', 'marzen'),
  new Tile('chalice', 'url', 'trappist'),
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

////////////////////////////////
//Defined variables Game Logic Here

const grid = document.querySelector('.grid')
const scoreBoard = document.querySelector('.scoreBoard')
const selection = document.querySelector('.selection')
let popup = document.querySelector('.popup')
let playAgain = document.querySelector('.playAgain')
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
  createBoard(grid, gridItems)
  arrangeCell()
  playAgain.addEventListener('click', replay)

  // playAgain.addEventListener('click', replay)
  ///click function for img
  imgs = document.querySelectorAll('img')
  Array.from(imgs).forEach((img) => img.addEventListener('click', flipCell))
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
    cellsPaired += 1
    scoreBoard.innerHTML = cellsPaired
    setTimeout(checkIsMatch, 500)
    if (checkIsMatch(cellsSelected[0], cellsSelected[1])) {
    } else {
      // const erMsg = document.getElementById('erMsg')
      // erMsg.style.display = 'visible'
      //       imgs[firstCard].setAttribute("src", "blank.png");
      // imgs[secondCard].setAttribute("src", "blank.png"); alert("wrong, please try again"); imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip");
      console.log('not a match')
    }
    cellsSelected = []
    cellId = []
    clicks += 1
    clickGrid.innerHTML = clicks
  }
  function checkWon() {
    if (cellsPaired == gridItems.length / 2) {
      alert('win!')
      setTimeout(() => (popup.style.display = 'flex'), 300)
    }
  }
}
// setTimeout(checkIsMatch, 500)
function replay() {
  arrangeCell()
  grid.innerHTML = ''
  createFrame(grid, gridItems)
  cellsPaired = 0
  clicks = 0
  clickBoard.innerHTML = 0
  scoreBoard.innerHTML = 0
  popup.style.display = 'none'
}
//////Pair Check

// Generating the grid
