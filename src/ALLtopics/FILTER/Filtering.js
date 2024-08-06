import React, { useState } from 'react'
import Data from "../FILTER/data.json"

function Filtering() {
    const [search,setSearch]=useState('')
  return (
    <div>
        <center>
            <h1>Enter your city : </h1>
            <input type="text" value={search} onChange={(e=>setSearch(e.target.value))}/>


            {Data.filter(city=>city.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(each=>{
                return(
                    <div style={{border:"1px solid black",margin:"10px", padding:"10px",maxWidth:"70%",color:"blue"}}>
                        {each.title}
                    </div>
                )
            })}
        </center>
    </div>
  )
}

export default Filtering