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
    return(
        <>
        <li>Apple</li>
        <li>Banana</li>
        <li>Promo</li>
        <li>Grapes</li>
        </>
    )
}