const fonts = [
  'Alegreya Sans SC, sans-serif',
  'Alegreya SC, serif',
  'Amatic SC, cursive',
  'Andika, sans-serif',
  'Anonymous Pro, monospace',
  'Arimo, sans-serif',
  'Arsenal, sans-serif',
  'Balsamiq Sans, cursive',
  'Bellota Text, cursive',
  'Bitter, serif',
  'Caveat, cursive',
  'Comfortaa, cursive',
  'Commissioner, sans-serif',
  'Cormorant, serif',
  'Cormorant Garamond, serif',
  'Cormorant Infant, serif',
  'Cormorant SC, serif',
  'Cousine, monospace',
  'Cuprum, sans-serif',
  'Dela Gothic One, cursive',
  'EB Garamond, serif',
  'El Messiri, sans-serif',
  'Exo 2, sans-serif',
  'Fira Code, monospace',
  'Fira Sans, sans-serif',
  'Fira Sans Condensed, sans-serif',
  'Forum, cursive',
  'Gabriela, serif',
  'IBM Plex Sans, sans-serif',
  'IBM Plex Serif, serif',
  'Inter, sans-serif',
  'Istok Web, sans-serif',
  'JetBrains Mono, monospace',
  'Jost, sans-serif',
  'Jura, sans-serif',
  'Kelly Slab, cursive',
  'Kiwi Maru, serif',
  'Kosugi Maru, sans-serif',
  'Kurale, serif',
  'Ledger, serif',
  'Literata, serif',
  'Lobster, cursive',
  'Lora, serif',
  'Manrope, sans-serif',
  'Marmelad, sans-serif',
  'Merriweather, serif',
  'Montserrat, sans-serif',
  'Montserrat Alternates, sans-serif',
  'Mulish, sans-serif',
  'Noto Sans Display, sans-serif',
  'Noto Serif, serif',
  'Nunito, sans-serif',
  'Nunito Sans, sans-serif',
  'Oi, cursive',
  'Old Standard TT, serif',
  'Open Sans, sans-serif',
  'Oranienbaum, serif',
  'Orelega One, cursive',
  'Oswald, sans-serif',
  'Overpass, sans-serif',
  'Overpass Mono, monospace',
  'Pacifico, cursive',
  'Pangolin, cursive',
  'Pattaya, sans-serif',
  'Philosopher, sans-serif',
  'Play, sans-serif',
  'Playfair Display, serif',
  'Playfair Display SC, serif',
  'Podkova, serif',
  'Prata, serif',
  'Press Start 2P, cursive',
  'Prosto One, cursive',
  'PT Sans, sans-serif',
  'PT Sans Caption, sans-serif',
  'PT Sans Narrow, sans-serif',
  'PT Serif, serif',
  'Reggae One, cursive',
  'Roboto, sans-serif',
  'Roboto Condensed, sans-serif',
  'Roboto Mono, monospace',
  'Roboto Slab, serif',
  'RocknRoll One, sans-serif',
  'Rubik, sans-serif',
  'Rubik Mono One, sans-serif',
  'Ruslan Display, cursive',
  'Scada, sans-serif',
  'Seymour One, sans-serif',
  'Source Code Pro, monospace',
  'Source Sans 3, sans-serif',
  'Source Sans Pro, sans-serif',
  'Source Serif 4, sans-serif',
  'Source Serif Pro, serif',
  'Spectral, serif',
  'Spectral SC, serif',
  'Stalinist One, cursive',
  'STIX Two Text, serif',
  'Ubuntu, sans-serif',
  'Ubuntu Mono, monospace',
  'Vollkorn, serif',
  'Vollkorn SC, serif',
  'Yanone Kaffeesatz, sans-serif',
  'Yeseva One, cursive',
  'Zen Antique Soft, serif'
]

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

let font = fonts[Math.floor(Math.random() * fonts.length)]
let fontP = fonts[Math.floor(Math.random() * fonts.length)]

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function generateColor() {
  const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let hash = '#'

  for (let i = 0; i < 6; i++) {
    hash += sample(symbols)
  }

  return hash
}

function placeFont(frame) {
  let color = generateColor()

  const createHeader = document.createElement('h1')
  const createHeaderHelper = document.createElement('h3')
  const createText = document.createElement('p')
  const createTextHelper = document.createElement('h3')
  const createColorShow = document.createElement('header')
  const fontSize = getRandomArbitrary(48, 88)

  createHeader.innerHTML = 'Заголовок'
  createHeader.style.fontSize = [fontSize, 'px'].join('')
  createHeader.style.color = ['#FFFFFF']
  createHeader.style.fontFamily = [font]
  createHeader.style.fontWeight = ['700']

  editable = createHeader.contentEditable
  createHeader.contentEditable = 'true'

  createHeaderHelper.style.color = ['#FFFFFF']
  createHeaderHelper.innerHTML = `Font: ${font}. Font size: ${fontSize} px ,`

  createText.innerHTML = 'Основной текст'
  createText.style.fontSize = [fontSize / 2, 'px'].join('')
  createText.style.color = ['#FFFFFF']
  createText.style.fontFamily = [fontP]
  editable = createText.contentEditable
  createText.contentEditable = 'true'

  createTextHelper.style.color = ['#FFFFFF']
  createTextHelper.innerHTML = `Font: ${fontP}. Font size: ${fontSize / 2} px ,`

  frame.style.backgroundColor = color

  createColorShow.innerHTML = color

  frame.appendChild(createHeader)
  frame.appendChild(createHeaderHelper)
  frame.appendChild(createText)
  frame.appendChild(createTextHelper)
  frame.appendChild(createColorShow)
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
