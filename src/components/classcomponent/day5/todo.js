
import "./todo.css"

import React, { Component } from "react";


class Todo extends Component{
        // state={
        //     todos:["apple","banana"]
        // } 
        constructor(){
            super()
            this.state={
                todos:["apple","banana"]
            }
        }

        addtodomethod=()=>{
            const newState=[...this.state.todos,"watermilon"]
            this.setState({
                todos:newState
            })
        }

        clearAlltodos=()=>{
            const news=[]
            this.setState({
                todos:news
            })
        }

        deleteSelectedTodo=(index)=>{
                alert(index)

                const filteredArray=this.state.todos.filter((items,idx)=>idx!==index)
                this.setState({
                    todos:filteredArray
                })
        }

        updateSelectedTodo=(index)=>{
            const updateArray=this.state.todos.map((eachfruit,ind)=>{
                if(ind===index){
                        return "Kiwi"
                }
                else{
                    return eachfruit
                }
            })
            this.setState({
                todos:updateArray
            })
        }

        componentDidMount(){
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(name=>console.log(name))
        }
    render(){
        return(
            <div className="dv">
            <h2>Todo component</h2>
            <button onClick={this.addtodomethod}>add to</button>
            <button onClick={this.clearAlltodos}>clearAlltodo</button> 
           
            {
                this.state.todos.map((each,index)=>{
                    return(
                        <React.Fragment key={index}>
                        <h3>{index+1}{each}</h3>
                        <button onClick={()=>this.deleteSelectedTodo(index)}>Delete the todo</button>
                        <button onClick={()=>this.updateSelectedTodo(index)}>update todo</button>

                       
                        </React.Fragment>
                    )
                })
            }
            </div>
        )
    }
}
export default Todo