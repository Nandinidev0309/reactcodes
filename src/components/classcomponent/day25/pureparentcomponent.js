import React, { Component } from 'react'
import Purechildcomponent from './purechildcomponent'

export default class Pureparentcomponent extends Component {
    state={
        count:0
    }
    onClick=(scale)=>{
        this.setState({
            count:this.state.count+scale
        })
    }
  render() {
    console.log("parent rendering.....");
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={()=>this.onClick(4)}>Click to change count</button>
        <Purechildcomponent/>
      </div>
      
    )
  }
}
