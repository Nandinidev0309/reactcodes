import { Component} from "react"
import Props from "./props"

class Components extends Component{
    state={
      name:"Nandini"
    }
    handledatas=()=>{
        this.setState({name:"Nandini reddy"})
    }
  render(){
    return(
        <>
        
        <h2>My LIFE My RULES {this.state.name} </h2>
        
        {/* <button onClick={()=>this.setState({name:"reddy"})}>Click me</button>*/}         {/*  In-line styling */}

        <button onClick={this.handledatas}>Click me</button>
       
        </> 
    )
  }
}
export default Components
