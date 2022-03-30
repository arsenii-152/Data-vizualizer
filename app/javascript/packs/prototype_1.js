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
function placeFont(frame) {
  const createHeader = document.createElement('h1')
  createHeader.innerHTML = 'h1 content here'

  const createText = document.createElement('p')
  createText.innerHTML = 'This is main text'

  const fontSize = 64
  createHeader.style.fontSize = [fontSize, 'px'].join('')
  createText.style.fontSize = [fontSize / 2, 'px'].join('')
  createHeader.style.color = ['#ff0000']
  createHeader.style.fontFamily = [font]
  createHeader.style.fontWeight = ['300']
  createText.style.fontFamily = [fontP]

  frame.appendChild(createHeader)
  frame.appendChild(createText)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_1')[0]
  const frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)
  placeFont(frame)
})
