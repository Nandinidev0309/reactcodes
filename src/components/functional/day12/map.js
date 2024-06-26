import { Cardss } from "../day11/cards"

const Map=()=>{
return(
    <>
    <div>
       {
        [1,2,3,4].map((num,index)=>
        <Cardss key={index}></Cardss>)
       }
    </div>
    </>
)
}
export default Map