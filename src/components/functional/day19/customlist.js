const Customlist=(prop)=>{
const {list}=prop;

return(
    <>
    <ol>
       {
        list.map(each=>{
            return(
                <>
                <li>{each}</li>
                </>
            )
        })
       }
    </ol>
    <ul>
       {
        list.map(each=>{
            return(
                <>
                <li>{each}</li>
                </>
            )
        })
       }
    </ul>
    </>
)
}
export default Customlist