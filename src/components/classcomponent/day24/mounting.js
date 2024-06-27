import React, { Component } from 'react'

export default class Mountingphase extends Component {

    constructor(){
        console.log("Constructor executing");
        super()
        this.state={
            count:10,
            favoritecolor:"green"
        }
    }

    componentDidMount(){
        console.log("componentDidMount executing");
    }

    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favColor };
      }
    
  render() {
    console.log("Render executing");
    return (
      <div>mounting
        <h3>My favourite color{this.state.favoritecolor}</h3>
      </div>
    )
  }
}
