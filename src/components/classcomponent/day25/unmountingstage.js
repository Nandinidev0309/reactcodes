import { Component } from "react";
import ChildComponent from "./child";


class Unmountingstage extends Component{
    state={
        isChildVisible:true
    }

    onClick=()=>{
        this.setState({
            isChildVisible:!this.state.isChildVisible
        })
    }
    render(){
        return(
            <>
            <h3>Unmounting </h3>
            <button onClick={this.onClick}>Click to hide child</button>
            {
                this.state.isChildVisible?<ChildComponent/>:null
            }
            
            </>
        )
    }
}
export default Unmountingstage