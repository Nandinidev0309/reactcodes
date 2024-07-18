

export const initialstate={
    todos:["breakfast at 10am "]
}


export const reducerFunction=(state,action)=>{

    switch(action.typess){
        case "ADD_TODO" :
            // return {...state,todos:[...state.todos,"eat the lunch"]}
            return {...state,todos:[...state.todos,action.newTodo]}
        case "DELETE_TODO":
            return
        case "UPDATE_TODO" :
            return
        default :
            return state

    }

}