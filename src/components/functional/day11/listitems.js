export const Orderlist=()=>{
    return(
        <>
        <ol>
        <Listitem/>
        </ol>
        </>
    )
}
export const Unorderlist=()=>{
    return(
        <>
        <ul><Listitem/></ul>
        </>
    )
}
const Listitem=()=>{
    const eachfruit=["apple","banana","promo","grapes"]
    return(
    <>
        {eachfruit.map((values)=>{
                return(
                    <>
                    <h3>{values}</h3>
                    </>
                )
        })
        } 
    </>)
}
    // return(
    //     <>
    //     <li>Apple</li>
    //     <li>Banana</li>
    //     <li>Promo</li>
    //     <li>Grapes</li>
    //     </>
    // )
