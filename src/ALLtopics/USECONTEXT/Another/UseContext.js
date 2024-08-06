import React, { useContext } from 'react'
import { Store } from '../../../App'


// function UseContext() {
//     const item=useContext(Store)
//     console.log(item);
    
//   return (
//     <div>
//         <h1>hello world</h1>
//         </div>
//   )
// }

// export default UseContext 




function UseContext() {
  return (
    <>
        <Store.Consumer>
        {value=><div>{value}</div>}
    </Store.Consumer>
    </>


  )
}

export default UseContext



// app  

// {/* <Store.Provider value={"telugu"}>
//   <UseContext/> */}                                                        //..................
// {/* <div>
//   <ComponentB/>
// </div> */}
// {/* </Store.Provider> */}