import React from 'react'
import "./todo.css"
function Todoslist() {
  return (
    <div>
        <center>
        <form className='TodoForm'>
        <input className='todo-input' type="text" placeholder='what is your task today'/>
        <button className='button'>submit</button>
        </form>
      </center>
    </div>
  )
}

export default Todoslist