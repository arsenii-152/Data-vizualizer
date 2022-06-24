const api_url = `https://api.waqi.info/feed/${city}/?token=demo`
async function get_location() {
  const response = await fetch(api_url)
  const data = await response.json()
  const pm25_rate = inputValue
  console.log(pm25_rate)
}

get_location()

function placeCoords(frame) {
  const label = document.createElement('label')
  const input = document.createElement('input')
  const button = document.createElement('button')

  label.innerHTML = 'Введите город'
  input.id = 'domTextElement'
  button.addEventListener(
    'click',
    (geyInputValue = () => {
      let inputValue = document.getElementById('domTextElement').value
      document.getElementById('valueInput').innerHTML
    })
  )

  frame.appendChild(label)
  frame.appendChild(input)
  frame.appendChild(button)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_5')[0]
  const frame = document.createElement('div')

  const welcome = document.createElement('div')
  welcome.classList.add('welcome')

  const createWelcomeHeader = document.createElement('h1')
  createWelcomeHeader.innerHTML = 'Это рандомайзер презентации!'
  const createWelcomeText = document.createElement('p')
  createWelcomeText.innerHTML =
    'Здесь можно рандомно подобрать шрифты для вашей презентации, <br> а также получить случайный цвет <br>или градиент'

  frame.classList.add('frame')

  welcome.appendChild(createWelcomeHeader)
  welcome.appendChild(createWelcomeText)

  container.appendChild(welcome)
  container.appendChild(frame)
  placeFont(frame)

  const button = document.createElement('button')
  button.innerHTML = 'Сгенерировать!'

  const gradButton = document.createElement('button')
  gradButton.innerHTML = 'Добавить градиент!'
  gradButton.classList.add('gradient-button')

  const gradValue = document.createElement('span')

  function generateFade(frame) {
    let colorOne = generateColor()
    let colorTwo = generateColor()
    let angle = Math.floor(Math.random() * 360)

    const colorInfo = document.getElementsByTagName('header')[0]

    frame.style.background = `radial-gradient(${colorOne}, ${colorTwo})`
    colorInfo.innerHTML = `background: radial-gradient(${colorOne}, ${colorTwo});`
  }

  welcome.appendChild(button)
  welcome.appendChild(gradButton)
  frame.appendChild(gradValue)

  button.addEventListener('click', () => {
    location.reload()
  })

  gradButton.addEventListener('click', () => {
    generateFade(frame)
  })
})
