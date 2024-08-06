
import  "./wrapping.css"

const Wrapping=(prop)=>{

    return (
        <>
            <div id="bgcontainer">
                {prop.children}
                <button>click</button>
            </div>

        </>
    )
}
export default Wrapping