// import { Cardss } from "../day11/cards"

const Ifelse=()=>{
    const iftrue=true
    // if(true){
    // return(
    //     <>
    //         <h3>Good Morning</h3>
    //         <Cardss/>
    //     </>
    // )}
    // else{
    //     return(
    //         <>
    //         <h3>Good Afternoon</h3>
    //         </>
    //     )
    // }
    return(
        <>
        {/* terinary operator */}
        {/* {
            iftrue?(<><h3>Good Morning</h3>
                    <Cardss/>
                    </>
                    ) : (
                    <>
                    <h3>Good Afternoon</h3>
                     </>
                    )


        } */} 


        {/* short circuit */}
        {
            iftrue && (
                <>
                <h3>welcome</h3>
                </>
            )
        }
        </>
    )
}
export default Ifelse