import React from 'react'
import { UserContext } from '../../App'

function ComponentC() {
  return (
    <div>
      <center>
        <UserContext.Consumer>
          {value=><div>{value}</div>}
        </UserContext.Consumer>
      <h1>Hello world</h1>
      </center>
      
    </div>
  )
}

export default ComponentC

//  {/* <UserContext.Provider value="TELUGU SKILLHUB">
//     <ComponentC/>
//     </UserContext.Provider> */}