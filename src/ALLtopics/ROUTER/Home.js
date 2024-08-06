import React, { useState } from "react";
// import { redirect } from 'react-router'

function Home() {
    const[set,setNavigate]=useState(false)
    // (if(set){
    //     return <Redirect to="/about"/>
    // }

  return (
    <div>
      <center>
        <h1>Welcome To HomePage.............!!!!!!!!!!!!!!!!!!!!!!!11</h1>
        <button onClick={()=>setNavigate(true)}>Login</button>
      </center>
    </div>
  );
}

export default Home;
