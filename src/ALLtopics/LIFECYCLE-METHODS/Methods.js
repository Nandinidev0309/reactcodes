import { Component } from "react";

class Components extends Component {
    
    state = {
        show:true,
        count:0
      }

       deleteTodo=()=>{
        this.setState({show:false})
      }


      componentDidMount(){
        console.log("componentDidMount Method.........");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate Method...........");
    }
    render() { 
        // let myrender;
        // if (this.state.show){
        //     myrender= <Child/>;
        // }
        return ( 
            <>
            <center>
            {this.state.show && <Child/>}
            <button type="button" onClick={this.deleteTodo}>Delete Header</button>
            </center>
<hr/>
            <center>
            <h1>count : {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}> click me</button>
            </center>
            
            </>
        )
    }
}


class Child extends Component {
    
    componentWillUnmount(){
        console.log("componentWillUnmount Method.........");
    }
    render() { 
        return (  
            <h1>Hello world</h1>
        )
    }
}
 

 
export default Components;