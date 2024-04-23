const Listcomponent=()=>{
    const fruitsnames=["Banana","Apple","Grapes"];
    const vegnames=["Spinach","Cabbage","Potato","Beetroot"]
    return(
        <div>
        <ol>
            <li>FRUITS</li>
            <ul>
                <li>{fruitsnames[0]}</li>
                <li>{fruitsnames[1]}</li>
                <li>{fruitsnames[2]}</li>
            </ul>
            <li>VEGETABLES</li>
            <ul>
                <li>{vegnames[0]}</li>
                <li>{vegnames[1]}</li> 
                <li>{vegnames[2]}</li>
                <li>{vegnames[3]}</li>
            </ul>

            <li>Cereals</li>
            <li>Nuts</li>
        </ol>
        <hr></hr>
        </div>
      
    
    )
}
export default Listcomponent