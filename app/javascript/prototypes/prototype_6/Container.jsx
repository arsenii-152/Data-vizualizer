import React, { PureComponent } from 'react'
import Frame from './Frame'

export default class Container extends PureComponent {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  render() {
    const createHeader = document.createElement('h1')
    const createHeaderHelper = document.createElement('h3')
    const createText = document.createElement('p')
    const createTextHelper = document.createElement('h3')
    const createColorShow = document.createElement('header')
    const welcome = document.createElement('div')
    const createWelcomeHeader = document.createElement('h1')
    const createWelcomeText = document.createElement('p')
    const button = document.createElement('button')
    const gradButton = document.createElement('button')

    return <div className="Container">Container</div>
  }
}
