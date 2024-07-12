

import { Component } from "react"

 class Circletask extends Component {
  render() {
    return (
        <>
        {[true,false,true,false].map((each)=>{
            return(
               
                <div style={
                    {border:"2px solid black",
                        height:100, width:100,
                        borderRadius:"50%",
                        margin:10,
                        backgroundColor:each?"black":"red"
                    }}
                >
                </div>
            )
        })},
        </>
    )
  }
}
export default Circletask 
