//  import axios from 'axios'
// import React, { useEffect, useState } from 'react'



// function Axiosget() {
// const[datas,setData]=useState([])
//      useEffect(()=>{
//         axios.get("https://fakestoreapi.com/products")
//         .then(res=>setData(res.data))
//     },[])
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
       
//        {
//             datas.map((each)=>{
//                 return(
//                     <div style={{ border: '1px solid black', padding: '20px', width: '30%' }} key={each.id}>
//                         <center>
//                     <h1 >{each.title}</h1>
                    
//                     <img src={each.image} alt={each.title} height={100} width={100} />
                    
//                     <p>Description : {each.description}</p>
//                     <button> price : {each.price}</button>
//                     <p> rating : {each.rating && each.rating.rate}</p>
//                     </center>

                   
                    
//                     </div>
//                 )
//             })
//         }
       
//     </div>
//    )
//  }

//  export default Axiosget 

import React, { Component } from 'react'

export default class axios extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
