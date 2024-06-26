const Images=(prop)=>{
    const {pc,height,width,alt}=prop
    return(
        <>
        <img src={pc} height={height} width={width} alt={alt}/> 
        {/* <img {...prop}/> */}
        </>
    )
}
export default Images