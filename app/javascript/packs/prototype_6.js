function error({ message }) {
  console.log(message)
}

let selectValue = document.getElementById('selector').value
let button = document.getElementById('button')
var city = 'selectValue'

const api_url = `https://api.waqi.info/feed/${city}/?token=30267e9a547cc168f19a4ec8b3bb646d070985d8`
async function get_location() {
  const response = await fetch(api_url)
  const data = await response.json()
  // const pm25_rate = data.data.iaqi.pm25.v
  // console.log(pm25_rate)
}
console.log(selectValue)
get_location()

function currentValue() {
  let selectValue = document.getElementById('selector').value
  document.getElementById('valueInput').innerHTML = selectValue
  get_location()
}

document.addEventListener('DOMContentLoaded', () => {
  button.addEventListener('click', () => {
    currentValue()
  })
})
