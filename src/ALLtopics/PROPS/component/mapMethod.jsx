import  "./wrapping.css"

function MapMethod(prop) {
    const{title,id,image,category,price}=prop
  return (
    <div id="bgcontainer">
      <h2>{id} {title}</h2>
      <img src={image} height={100} width={100}/> 
      <h3>{category}</h3>
      <button>{price}</button>
    </div>
  )
}

export default MapMethod
