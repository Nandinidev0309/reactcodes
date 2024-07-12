import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductdetailScreen() {
  const URL_PARAMS =useParams()
  console.log(URL_PARAMS);
  return (
    <div>
      <h1>Product Details</h1>
    </div>
  )
}
