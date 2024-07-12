import { useState } from "react"

const Todos=()=>{
    const initialstate=[
        {
            id:1,
            period:"morning",
            routine:["wokeup at 8 am","breakfast at 9 am","class at 10 am"]
        },
        {
            id:2,
            period:"Afternoon",
            routine:["snacks at 5 pm","instagram at 6 pm"," whatsapp at 7-7:30 pm"]
        }
    ]
    
    const [todos,setTodos]=useState(initialstate)


    const addNewTodo=()=>{
        const dummyTodo=
            {
                id:3,
                period:"Evening",
                routine:["lunch at 1 pm","break at 4 pm","class at 2 pm"]
            }

            const dummyIncludes=todos.find((eachtodo)=>
                eachtodo.id === dummyTodo.id
            
            );
            const updatedTodos=[...todos,dummyTodo]
            if(!dummyIncludes){
                setTodos(updatedTodos);
            } 
    }

    const removeRoutineHandler=(each)=>{
        const id =each.id

        const filteredData=todos.filter((eachtodo)=>eachtodo.id !== id)
        setTodos(filteredData);
    }

    return(
        <>
        <button onClick={addNewTodo}>Add new todo </button>
    {
        todos.map((each)=>{
            return(
                <>
                
                <h3>{each.id} {each.period}</h3>
                <button onClick={()=>removeRoutineHandler(each)}>Remove Routine</button>
                
                {
                    each.routine.map((you)=>{
                        return(
                            <>
                            <p>{you}</p>
                            </>
                        )
                    })
                }
                </>
            )
        })
    }
        </>
    )
}
export default Todos