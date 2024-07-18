import { useReducer } from "react"

const reducerFunction=(state,action)=>{
    switch(action.type){
        case "BOOK_TICKET":
        return{...state,bookedTickets:state.bookedTickets+action.noOfTickets,
            totalAvailableTickets:state.totalAvailableTickets-action.noOfTickets
        }
        case "HOLD_TICKET":
        return{...state,holdTickets:state.holdTickets+action.noOfTickets}
        default :
        return state
    }
    

}

const state={
    totalAvailableTickets:100,
    bookedTickets:0,
    holdTickets:0
}

const UseReducer=()=>{
    const[currentState,dispatchFunction]=useReducer(reducerFunction,state)

    const bookticket=()=>{
        dispatchFunction({
            type:"BOOK_TICKET",
            noOfTickets:1
        })
    }
    

    const holdticket=()=>{
        dispatchFunction({
            type:"HOLD_TICKET",
            noOfTickets:1
        })
    }


    return(
        <>
        <h2>Available Tickets{currentState.totalAvailableTickets}</h2>
        <h2>Booked Tickets{currentState.bookedTickets}</h2>
        <h2>Hold Tickets{currentState.holdTickets}</h2>
        <button onClick={bookticket} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded">Book Tickets</button> 
        <button onClick={holdticket} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mx-3 rounded-l">Hold Tickets</button>
        </>
    )
}
export default UseReducer