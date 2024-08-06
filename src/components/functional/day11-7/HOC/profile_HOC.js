import { useEffect, useState } from "react"

const addProfile=(WrappedComponent)=>{
   
    return (props)=>{

        const [data,setData]=useState({})
        useEffect(()=>{
            //API 
            const data={
                name:"bunny",
                salary:90000  
            }
            setData(data);
        },[])

        return(
        <>
         <WrappedComponent  data={data} {...props}/>
        </>
        )
       
    }
}

 export default addProfile  