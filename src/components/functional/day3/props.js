const ButtonDay3=(props)=>{
    console.log(props,"props")
    const{text,bgcolor,buttonproperties:{height,width},color,padding,margin}=props
    return(
        <>
        {/* <button style={{
            backgroundColor:props.bgcolor,
            height:props.buttonproperties.height,
            width:props.buttonproperties.width,
            color:props.color,
            padding:props.padding,
            margin:props.margin
        }}>{props.text}</button> */} 
        <button style={{
            backgroundColor:bgcolor,
            height:height,
            width:width,
            color:color,
            padding:padding,
            margin:margin
        }}>{text}</button>
        </>
    )
}
export default ButtonDay3