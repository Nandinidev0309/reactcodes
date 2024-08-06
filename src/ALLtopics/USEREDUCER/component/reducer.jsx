import { useReducer } from "react"
import "./reducer.css"

function Reducer() {
    const reducerFunction=(state,action)=>{
        if(action.type ==="add"){
            return state+1
        }
        else if(action.type ==="sub"){
            return  state -1
        }
        else if(action.type ==="mul"){
            return state*2
        }
        else if(action.type ==="div"){
            return  state/2
        }

    }

    // const initialstate={
    //     counter:0
    // }
    const[initialState,dispatch]=useReducer(reducerFunction,0)

    const handleAdd=()=>{
        dispatch({
            type:"add"
        })
    }
    const handleSub=()=>{
        dispatch({
            type:"sub"
        })
    }
    const handleMul=()=>{
        dispatch({
            type:"mul"
        })
    }
    const handleDiv=()=>{
        dispatch({
            type:"div"
        })
    }
  return (
    <div id="bgcontainer">
        <h1 style={{paddingTop:"50px"}}>COUNT : {initialState}</h1> 
        <h1>{initialState.state}</h1>
      <button onClick={handleAdd} style={{margin:"10px"}}>Add</button>
      <button onClick={handleSub} style={{margin:"10px"}}>Sub</button>
      <button onClick={handleMul} style={{margin:"10px"}}>Mul</button>
      <button onClick={handleDiv} style={{margin:"10px"}}>Div</button>
    </div>
  )
}

export default Reducer
