import "./fakestory.css"
const Fakeapi=(prop)=>{
    
   return(
    <div className="fakestyle">
        <h1>{prop.ps}</h1>
        <h3>{prop.title}</h3>
        <p>{prop.price}</p>
        <p>{prop.description}</p>
        <p>{prop.category}</p>
        <img src={prop.image} height={100} width={100}/>
    
    </div>
   )
}
export default Fakeapi 


