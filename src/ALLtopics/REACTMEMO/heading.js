import React from 'react'

function Heading(props) {
  return (
    <div>
        <h1>hello {props.name}</h1> 
        {console.log("hello")}
    </div>
  )
}
 export default React.memo(Heading) 
// export default Heading 