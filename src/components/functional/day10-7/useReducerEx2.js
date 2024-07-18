import { useReducer } from "react"


import {reducerFunction , initialstate} from "./function"


const ReducerUse=()=>{
    const [currentState,dispatch]=useReducer(reducerFunction,initialstate)

    const addTodoFunction=()=>{
        dispatch({
            typess:"ADD_TODO",
            newTodo:"eat the lunch at 1 pm"
        })
    }
    return(
        <>

<button onClick={addTodoFunction}  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded">Add Todo</button>
        {
        currentState.todos.map((each)=>{
            return<>
            <h2>
                {each}
            </h2>
            </>
        })
        }
        
        </>
    )
}
export default ReducerUse