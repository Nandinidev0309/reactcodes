import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Carousel from '../../day2-7/nestedNavigations/carousel'



export default function Homescreen() {

  const [data , setData]=useState([])

  const fetchData=async()=>{
      const response=await axios.get("https://fakestoreapi.com/products")
      if (response.status===200){
          setData(response.data)
      }
  }


  return (
    <div>
        <Navbar/>
      <h2>Welcome to Home screen</h2>
      {/* {[1,2,3,4].map((each)=>{
        return(
            <>
            <Link to={`/hyderabad/${each}/info`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded">{each}</button>
            </Link> 
            </>
        )
      })
      }  */}

<button onClick={fetchData}>Fetch Data</button>

{
  data.length>0?
  <>
  {data.map((each)=>{
    return(
        <>
        <Link to={`/${each.category}/${each.id}/info`}>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded">{each.title}</button>
        </Link> 
        </>
    )
  })
  } 
  </>
    :
    <h4>No products Found</h4>
}
    </div>
  )
}
