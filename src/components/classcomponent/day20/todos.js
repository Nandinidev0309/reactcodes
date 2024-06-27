import React, { Component } from "react";



class Todos extends Component{
    state={
        todos:["First","Second","Third","Fourth","Fifth"]
    }
    todoHandler=()=>{
        this.setState({
            todos:[...this.state.todos,"hey girl"]
        })
    }


    todoUpdate=(index)=>{
        let newTodos=this.state.todos;
        newTodos[index]="hey boy"
        this.setState({
            todos:newTodos
        })
    } 

    todoDelete=(index)=>{
        let newTodos=this.state.todos.filter((ea,i) => index !== i)
        this.setState({
            todos:newTodos
        })
    }
    render(){
        return(
            <>
           <h1>Todos List</h1>
           <ol>
           
            {
                this.state.todos.map((each,index)=>{
                   return(
                    < >
                    <li key={index} style={{fontWeight:"bold"}}>{each}</li>
                    <button onClick={()=>this.todoUpdate(index)}style={{height:30,width:100,border:"1px solid black", fontWeight:"bold"}}>Update</button>
                    <button onClick={()=>this.todoDelete(index)}style={{height:30,width:100,border:"1px solid black", fontWeight:"bold"}}>Delete</button>
                    </>
                   ) 
                })
            }
            
            </ol>
            <button onClick={this.todoHandler}style={{height:30,width:100,backgroundColor:"blue",border:"1px solid black", fontWeight:"bold"}}>Add Todo</button>
            </>
        )
    }
}
export default Todos