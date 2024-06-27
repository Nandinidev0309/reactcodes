import React, { Component } from 'react'

export default class Updatingphase extends Component {

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
        document.title=`React count${this.state.count}`
    }

    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favColor };
      }

    componentDidUpdate(){
        console.log("componentDidUpdate executing");
        document.title=`React count${this.state.count}`
    }  

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(state,prop){
        console.log(state,prop);
        return null

    }
    
    increaseCount=()=>{
        this.setState({
            count:this.state.count+1
            
        })
        
    } 
    
  render() {
    console.log("Render executing");
    return (
      <div>mounting
        <h3>My favourite color {this.state.favoritecolor}{this.state.count}</h3>
        <button onClick={this.increaseCount}>Click to Increase Count</button>
      </div>
    )
  }
}
