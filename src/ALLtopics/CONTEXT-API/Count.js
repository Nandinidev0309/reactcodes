import React, { useContext } from 'react'
import { store } from '../../App'

function Count() {
    const[data,setData]=useContext(store)
  return (
    <div>count : {data.length}</div>
  )
}

export default Count