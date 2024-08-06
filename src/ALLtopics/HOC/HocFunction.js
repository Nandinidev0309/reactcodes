// import React from 'react'

import { PureComponent } from "react"

// function hocFunction(Component) {
//   return ()=>{
//     return(
//       <>
//       <Component/>
//       <h1>welcome user....</h1>
//       </>
//     )
//   }
// }

// export default hocFunction  

const hocFunction=(Component)=>{
  return(
    class extends PureComponent{
      state={
        auth:false
      }
      render(){
        return(
          <>
          { this.state.auth?<Component name="Nandini"/>:<h1>please login</h1>}
          </>
        )
      }

    }
  )
}
export default hocFunction