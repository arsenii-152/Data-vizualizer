import React, { PureComponent } from 'react'
import Frame from './Frame'

export default class Container extends PureComponent {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  render() {
    return <div className="Container">Container</div>
  }
}
