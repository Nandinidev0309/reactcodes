import React, { Component } from 'react'

export default class ChildComponent extends Component {

    componentWillUnmount(){
        alert("child removed")
    }
  render() {
    return (
        <div>ChildComponent</div>
    )
  }
}
