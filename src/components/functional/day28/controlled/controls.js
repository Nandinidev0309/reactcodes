import { useState } from "react";

function FavouriteColor(){
   const[color,setColor] =useState("red")

   return(
    <>
    <h1>My Favourite Color {color} !</h1>
    <button type="button" onClick={()=>setColor("yellow")}>Green</button>
    
    </>
   )
} 
export default FavouriteColor   

// this is useState