import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Invalid() {
    const navigate=useNavigate()
    const handleredirection=()=>{
        const isRedirect = true;
        if(isRedirect){
            navigate("/")
        }
        else{

        }
        
    }
  return (
    <div style={{marginTop:"20%"}}>
      <center>
      <h2>You have Lost 404 Customer Error</h2>
      <button onClick={handleredirection} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Home</button>
      </center>
    </div>
  )
}