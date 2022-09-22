// console.log('test')
//
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '2f603c6ce5msh234c1a8de3a29dep128be2jsn315b6458a2e6',
//     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//   }
// }
//
// const params = ''
//
// Promise.all([
//   fetch(
//     'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=37.618423&lat=55.751244',
//     options
//   ).then((response) => response.json()),
//   fetch(
//     'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=30.308611&lat=59.937500',
//     options
//   ).then((response) => response.json()),
//   fetch(
//     'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=45.960804&lat=51.592365',
//     options
//   ).then((response) => response.json()),
//   fetch(
//     'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=56.316666&lat=58.000000',
//     options
//   ).then((response) => response.json()),
//   fetch(
//     'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=82.933952&lat=55.018803',
//     options
//   ).then((response) => response.json())
// ]).then((data) => {})

// const windMoscow = data[0].data[0].wind_spd
// const windSaintsPetersburg = data[1].data[0].wind_spd
// const windSaratov = data[2].data[0].wind_spd
// const windPerm = data[3].data[0].wind_spd
// const windNovosibirsk = data[4].data[0].wind_spd
//
// const aqiMoscow = data[0].data[0].aqi
// const aqiSaintsPetersburg = data[1].data[0].aqi
// const aqiSaratov = data[2].data[0].aqi
// const aqiPerm = data[3].data[0].aqi
// const aqiNovosibirsk = data[4].data[0].aqi
//
// const tempMoscow = data[0].data[0].temp
// const tempSaintsPetersburg = data[1].data[0].temp
// const tempSaratov = data[2].data[0].temp
// const tempPerm = data[3].data[0].temp
// const tempNovosibirsk = data[4].data[0].temp

function placeCities(frame) {
  const moscow = document.createElement('div')
  moscow.classList.add('moscow')

  const saintspetersburg = document.createElement('div')
  saintspetersburg.classList.add('saintspetersburg')

  const saratov = document.createElement('div')
  saratov.classList.add('saratov')

  const perm = document.createElement('div')
  perm.classList.add('perm')

  const novosibirsk = document.createElement('div')
  novosibirsk.classList.add('novosibirsk')

  const name1 = document.createElement('h1')
  name1.innerHTML = 'Москва'
  const name2 = document.createElement('h1')
  name2.innerHTML = 'Санкт-Петербург'
  const name3 = document.createElement('h1')
  name3.innerHTML = 'Саратов'
  const name4 = document.createElement('h1')
  name4.innerHTML = 'Пермь'
  const name5 = document.createElement('h1')
  name5.innerHTML = 'Новосибирск'

  frame.appendChild(moscow)
  frame.appendChild(saintspetersburg)
  frame.appendChild(saratov)
  frame.appendChild(perm)
  frame.appendChild(novosibirsk)

  moscow.appendChild(name1)

  saintspetersburg.appendChild(name2)

  saratov.appendChild(name3)

  perm.appendChild(name4)

  novosibirsk.appendChild(name5)
}

// function placeCityInfo() {
//   const moscowWind = document.createElemet('h2')
//   moscowWind.innerHTML = windMoscow
//
//   const moscowAqi = document.createElemet('h2')
//   moscowAqi.innerHTML = aqiMoscow
//
//   const moscowTemp = document.createElemet('h2')
//   moscowTemp.innerHTML = tempMoscow
//
//   moscow.appendChild(moscowWind)
//   moscow.appendChild(moscowAqi)
//   moscow.appendChild(moscowTemp)
// }

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_1')[0]
  const frame = document.createElement('div')
  const moscow = document.getElementsByClassName('moscow')
  // const moscowWind = document.createElemet('h2')
  // moscowWind.innerHTML = windMoscow
  // moscow.appendChild(moscowWind)

  frame.classList.add('frame')
  container.appendChild(frame)
  placeCities(frame)
})
let dots = []
let count
let cellSize = 40

function setup() {
  createCanvas(3000, 2000)
  background('#FF7D7D')

  let xCellsCount = width / cellSize
  let yCellsCount = height / cellSize
  count = xCellsCount * yCellsCount

  for (let yCount = 0; yCount < yCellsCount; yCount++) {
    for (let xCount = 0; xCount < xCellsCount; xCount++) {
      dots.push(
        createDot({
          xCount,
          yCount,
          cellSize
        })
      )
    }
  }
}

function draw() {
  background('#FF7D7D')
  for (let i = 0; i < count; i++) {
    dots[i].move()
    dots[i].display()
  }
}

function createDot({
  xCount,
  yCount,
  cellSize,
  d = 6,
  speed = random(0.04, 0.8)
}) {
  let paddingX = cellSize / 2
  let paddingY = cellSize / 2
  let velocity = speed * 1.2
  let directionX = 1
  let directionY = 1

  return {
    move() {
      paddingX = paddingX + speed * directionX
      if (paddingX >= cellSize || paddingX <= 0) {
        directionX *= -1
        paddingX = paddingX + velocity * directionX
        paddingY = paddingY + velocity * directionY
      }
      if (paddingY >= cellSize || paddingY <= 0) {
        directionY *= -1
        paddingY = paddingY + velocity * directionY
      }
    },
    display() {
      let x = xCount * cellSize + paddingX
      let y = yCount * cellSize + paddingY
      fill(0, random(0, 255), 0)
      noStroke()
      rect(x, y, d, 6)
      if (mouseIsPressed) {
        noFill()
        stroke(0, 30, 150, 50)
        // stroke(50, 255, 0, 20);
        line(mouseX, mouseY, x, y)
        rect(x - paddingX, y - paddingY, cellSize, cellSize)
      }
    }
  }
}
