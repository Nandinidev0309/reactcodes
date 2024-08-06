import React, { Component } from 'react'
import Components from './ClassComponent'

export default class Props extends Component {
  render() {
    return (
      <div>
        <h1>hello world {this.props.data}</h1>
        <Components/>
      </div>
    )
  }
}


// <Props data="bunny">
  
// </Props>