////////////////////////////////
// Global Variables Here
// const state = {
//   beginMatch: false,
//   selections: 0,
//   totalSelected: 0,
//   totalTime: 0,
//   loop: null
// }

//////////////////////////////
class Tile {
  constructor(id, img, pair) {
    this.name = id
    this.url = img
    this.pair = pair
  }
}
//////////////////////////////////
//Objects for Beers
const beers = [
  new Tile(
    'kolsch',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xq3SO9jg51xR36qy7c9pf1l8H1xiJzRTSlqlResSSOOnvd0aepy7QrkexjrDhy5GNPM&usqp=CAU',
    'stange'
  ),
  new Tile(
    'saison',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_cf_eQ0fnZrdfNJ5MZwYZeT-3hGMx4YdGQ&usqp=CAU',
    'tulip'
  ),
  new Tile(
    'marzen',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QbG4rIAiFTFIa6AYhKVI91wXMdYabMT3RTHsIs6zT5tCQwep5ZWa070FQa677AVGb9A&usqp=CAU',
    'stein'
  ),
  new Tile(
    'trappist',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiis_a5S5YGOo4aS9SN3E1nkbEe4glr1tAZA&usqp=CAU`',
    'chalice'
  ),
  new Tile(
    'hefeweizen',
    'https://www.google.com/aclk?sa=l&ai=DChcSEwjHhdCK48X6AhUCB30KHakmBkMYABAFGgJwdg&sig=AOD64_1-Wegl76mpNQD6oeq0UJfP1mnZmA&adurl&ctype=46&ved=2ahUKEwj1tcCK48X6AhUHKVMKHTD_BtcQvhd6BAgBEH8',
    'weizenglass'
  ),
  new Tile(
    'ipa',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xq3SO9jg51xR36qy7c9pf1l8H1xiJzRTSlqlResSSOOnvd0aepy7QrkexjrDhy5GNPM&usqp=CAU',
    'spiegelau'
  ),
  new Tile(
    'lambic',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2o9hK_oH4l9RTbnEbeebhk3i6-4cdsNj4FQ&usqp=CAU',
    'tumbler'
  ),
  new Tile(
    'bitter',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRby7ck-edZlm-WHnRdjDGHSWsySazc3A1FhQ&usqp=CAU',
    'nonic'
  )
]
////////////////////////////////
//Objects for Glassware
const glass = [
  new Tile(
    'stange',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknQOUZvA_5o8hXBkKY2Ox0Wiakk8_oKptNrZsuYsZOFOQzrh-n5FFirBLNvdo-bZCDxs&usqp=CAU',
    'kolsch'
  ),
  new Tile(
    'tulip',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcGBesqF_Oh9Bn7gtVmQMUzlFfuv6dMA9wg&usqp=CAU',
    'saison'
  ),
  new Tile(
    'stein',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzuqCBJWEk0UhwV1EHSwy4NfAQpDAX6kewg&usqp=CAU',
    'marzen'
  ),
  new Tile(
    'chalice',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnD_n3eAj1WlxLENGq0CAvd__ecDrDEmAGTMHJfcUuXzcljj0cSwzqNLlHAQwZ7xqEPHo&usqp=CAU',
    'trappist'
  ),
  new Tile(
    'weizenglass',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43IpOWBhbztJvrIJotPEjktK7YNllE0cPng&usqp=CAU',
    'hefeweizen'
  ),
  new Tile(
    'spiegelau',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdT2f_2Vew8PrTCnZxSWNpfQGAcP_4dlJzeg&usqp=CAU',
    'ipa'
  ),
  new Tile(
    'tumbler',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzLI6FC57A-rN5NkY_Oogc8pXy0ZLlwvoTA&usqp=CAU',
    'lambic'
  ),
  new Tile(
    'nonic',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRby7ck-edZlm-WHnRdjDGHSWsySazc3A1FhQ&usqp=CAU',
    'bitter'
  )
]

//function for pairmatch
const checkIsMatch = (tile1, tile2) => {
  if (tile1.pair === tile2.name || tile1.name === tile2.pair) {
    console.log(
      `checkIsMatch:: Match found tile1: ${tile1.name}, tile2: ${tile2.name}`
    )
    return true
  }

  console.log(
    `checkIsMatch:: Match not found tile1: ${tile1.name}, tile2: ${tile2.name}`
  )
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

let imgs
let cellId = []
let cellsSelected = []
let cellsPaired = 0
let clicks = 0

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

//////////////////////////

// const container = document.getElementById('container')
///////////////////////////////
//Function for
function makeRows(array1, array2) {
  const items = [...array1, ...array2]

  grid.style.setProperty('--grid-rows', items.length / 4)
  grid.style.setProperty('--grid-cols', items.length / 4)
  for (i = 0; i < items.length; i++) {
    let cell = document.createElement('div')
    cell.innerText = items[i].name
    cell.id = items[i].pair
    grid.appendChild(cell).className = 'grid-item'
  }
}

makeRows(beers, glass)

///////////////////////////
//Grid-works
document.addEventListener('DOMContentLoaded', function () {
  // arrangeCell()

  createFrame(grid, gridItems)
  arrangeCell()
  playAgain.addEventListener('click', replay)

  // Flipping Cells
  const gridItems = document.querySelectorAll('.grid-item')

  // gridItems.forEach((item) => {
  //   item.addEventListener('click', flipCell)

  ///////////click function for img
  imgs = document.querySelectorAll('img')
  gridItems.from(imgs).forEach((img) => img.addEventListener('click', flipCell))
})
/////////////////////////////////
//create board functions
function createFrame(grid, array) {
  popup.style.display = 'none'
  array.forEach((arr, index) => {
    let img = document.createElement('img')
    img.setAttribute(
      'src',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ862_xCOOcyiOrzpfozwKfgppGNm7mcpxy_w&usqp=CAU'
    )
    img.setAttribute('data-id', index)
    grid.appendChild(img)
  })
}
//////////////////////////////////
//arrangeCell function
function arrangeCell() {
  gridItems.sort(() => 0.5 - Math.random())
}

// Flipping Cells
const gridItems = document.querySelectorAll('.grid-item')

gridItems.forEach((item) => {
  item.addEventListener('click', flipCell)
})

function flipCell(e) {
  let imgs = document.querySelectorAll('img')
  let firstCell = cellId[0]
  let secondCell = cellId[1]
  cellsSelected.push(e.target)
  e.target.classList.add('flip')

  // e.target.setAttribute('src', [selected].img)
  if (cellsSelected.length === 2) {
    if (checkIsMatch(cellsSelected[0], cellsSelected[1])) {
      alert('pair!')

      cellsPaired += 1
      scoreBoard.innerHTML = cellsPaired
      setTimeout(checkPaired, 500)
    } else {
      imgs[firstCell].setAttribute(
        'src',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ862_xCOOcyiOrzpfozwKfgppGNm7mcpxy_w&usqp=CAU'
      )
      imgs[secondCell].setAttribute(
        'src',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ862_xCOOcyiOrzpfozwKfgppGNm7mcpxy_w&usqp=CAU'
      )
      alert('wrong, please try again')
      imgs[firstCell].classList.remove('flip')
      imgs[secondCell].classList.remove('flip')
    }
    cellsSelected = []
    cellId = []
    clicks += 1
    clickGrid.innerHTML = clicks
  }

  ///////////////////////////////////////////////////////
  //pairchecked
  function checkPaired() {
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
  clickGrid.innerHTML = 0
  scoreBoard.innerHTML = 0
  popup.style.display = 'none'
}
