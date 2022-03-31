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
  createHeader.innerHTML = 'Заголовок'

  const createHeaderHelper = document.createElement('h3')
  createHeaderHelper.innerHTML = font

  const createText = document.createElement('p')
  createText.innerHTML = 'Основной текст'

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
function generateFade(frame) {
  let colorOne = generateColor()
  let colorTwo = generateColor()
  let angle = Math.floor(Math.random() * 360)

  const colorInfo = document.getElementsByTagName('header')[0]

  frame.style.background = `radial-gradient(${colorOne}, ${colorTwo})`
  colorInfo.innerHTML = `background: radial-gradient(${colorOne}, ${colorTwo});`
}

export { sample, placeFont, randomize, generateColor, generateFade }
