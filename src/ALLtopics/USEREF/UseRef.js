import React, { useEffect, useRef } from 'react'

function UseRef() {
    const data=useRef(null)

    useEffect(()=>{
        data.current.focus()
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data.current.value);
    }
  return (
    <div >
        <form onSubmit={handleSubmit}>
        <input type='text' ref={data} placeholder='Enter your name'/> <br/>
        <input type='submit'/>
        </form>
    </div>
  )
}

export default UseRef