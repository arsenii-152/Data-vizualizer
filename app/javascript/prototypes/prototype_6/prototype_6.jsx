import React from 'react'
import ReactDOM from 'react-dom'
import Container from '../prototypes/prototype_6/Container'

const fontSize = 64
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Container fonts={fonts} fontSize={fontSize} />,
    document.getElementsByClassName('prototype_6')[0]
  )
})
