const fonts = [
  'Roboto, sans-serif',
  'Zilla Slab Highlight, cursive',
  'Open Sans, sans-serif, sans-serif',
  'Spectral, serif',
  'Slabo 27px, serif',
  'Lato, sans-serif',
  'Roboto Condensed, sans-serif',
  'Oswald, sans-serif',
  'Source Sans Pro, sans-serif',
  'Raleway, sans-serif',
  'Zilla Slab, serif',
  'Montserrat, sans-serif',
  'PT Sans, sans-serif',
  'Roboto Slab, serif',
  'Merriweather, serif',
  'Saira Condensed, sans-serif',
  'Saira, sans-serif',
  'Open Sans Condensed, sans-serif',
  'Saira Semi Condensed, sans-serif',
  'Saira Extra Condensed, sans-serif',
  'Julee, cursive',
  'Archivo, sans-serif',
  'Ubuntu, sans-serif',
  'Lora, serif',
  'Manuale, serif',
  'Asap Condensed, sans-serif',
  'Faustina, serif',
  'Cairo, sans-serif',
  'Playfair Display, serif',
  'Droid Serif, serif',
  'Noto Sans, sans-serif',
  'PT Serif, serif',
  'Droid Sans, sans-serif',
  'Arimo, sans-serif',
  'Poppins, sans-serif',
  'Sedgwick Ave Display, cursive',
  'Titillium Web, sans-serif',
  'Muli, sans-serif',
  'Sedgwick Ave, cursive',
  'Indie Flower, cursive',
  'Mada, sans-serif',
  'PT Sans Narrow, sans-serif',
  'Noto Serif, serif',
  'Bitter, serif',
  'Dosis, sans-serif',
  'Josefin Sans, sans-serif',
  'Inconsolata, monospace',
  'Bowlby One SC, cursive',
  'Oxygen, sans-serif',
  'Arvo, serif',
  'Hind, sans-serif',
  'Cabin, sans-serif',
  'Fjalla One, sans-serif',
  'Anton, sans-serif',
  'Cairo, sans-serif',
  'Playfair Display',
  'Droid Serif, serif',
  'Noto Sans, sans-serif',
  'PT Serif, serif',
  'Droid Sans, sans-serif',
  'Arimo, sans-serif',
  'Poppins, sans-serif',
  'Sedgwick Ave Display, cursive',
  'Titillium Web, sans-serif',
  'Muli, sans-serif',
  'Sedgwick Ave, cursive',
  'Indie Flower, cursive',
  'Mada, sans-serif',
  'PT Sans Narrow, sans-serif',
  'Noto Serif, serif',
  'Bitter, serif',
  'Dosis, sans-serif',
  'Josefin Sans, sans-serif',
  'Inconsolata, monospace',
  'Bowlby One SC, cursive',
  'Oxygen, sans-serif',
  'Arvo, serif',
  'Hind, sans-serif',
  'Cabin, sans-serif',
  'Fjalla One, sans-serif',
  'Anton, sans-serif',
  'Acme, sans-serif',
  'Archivo Narrow, sans-serif',
  'Mukta Vaani, sans-serif',
  'Play, sans-serif',
  'Cuprum, sans-serif',
  'Maven Pro, sans-serif',
  'EB Garamond, serif',
  'Passion One, cursive',
  'Ropa Sans, sans-serif',
  'Francois One, sans-serif',
  'Archivo Black, sans-serif',
  'Pathway Gothic One, sans-serif',
  'Exo, sans-serif',
  'Vollkorn, serif',
  'Libre Franklin, sans-serif',
  'Crete Round, serif',
  'Alegreya, serif',
  'PT Sans Caption, sans-serif',
  'Alegreya Sans, sans-serif',
  'Source Code Pro, monospace'
]

var font = fonts[Math.floor(Math.random() * fonts.length)]
var fontP = fonts[Math.floor(Math.random() * fonts.length)]

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function generateColor() {
  const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let hash = '#'

  for (var i = 0; i < 6; i++) {
    hash += sample(symbols)
  }

  return hash
}

function placeFont(frame) {
  var color = generateColor()

  const createHeader = document.createElement('h1')
  createHeader.innerHTML = 'Title'

  const createHeaderHelper = document.createElement('h3')
  createHeaderHelper.innerHTML = font

  const createText = document.createElement('p')
  createText.innerHTML = 'Main text'

  const createTextHelper = document.createElement('h3')
  createTextHelper.innerHTML = fontP

  const createColorShow = document.createElement('header')
  createColorShow.innerHTML = color

  const fontSize = 64
  createHeader.style.fontSize = [fontSize, 'px'].join('')
  createText.style.fontSize = [fontSize / 2, 'px'].join('')
  createHeader.style.color = ['#FFFFFF']
  createText.style.color = ['#FFFFFF']
  createHeaderHelper.style.color = ['#FFFFFF']
  createTextHelper.style.color = ['#FFFFFF']

  createHeader.style.fontFamily = [font]
  createHeader.style.fontWeight = ['300']
  createText.style.fontFamily = [fontP]

  frame.style.backgroundColor = color
  editable = createHeader.contentEditable
  createHeader.contentEditable = 'true'

  editable = createText.contentEditable
  createText.contentEditable = 'true'

  frame.appendChild(createHeader)
  frame.appendChild(createHeaderHelper)
  frame.appendChild(createText)
  frame.appendChild(createTextHelper)
  frame.appendChild(createColorShow)
}
function randomize() {
  createHeaderHelper.innerHTML = font
  createTextHelper.innerHTML = fontP
  createColorShow.innerHTML = color
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_4')[0]
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
    let colorThree = generateColor()
    let angle = Math.floor(Math.random() * 360)

    const colorInfo = document.getElementsByTagName('header')[0]

    frame.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}, ${colorThree})`
    colorInfo.innerHTML = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}, ${colorThree});`
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
