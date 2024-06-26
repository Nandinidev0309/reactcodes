
const But=(prop)=>{

    const {bgcolor,height,width,text,onPress}=prop
    return(
        <>
        <button onClick={onPress}  style={{backgroundColor:bgcolor,height:height,width:width}} >{text}</button>
        </>
    )
}
export default But