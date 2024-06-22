import Listcomponent from "../day1/list"

const Button2component=()=>{
    const login= true

    return(
        <>
        {
            login?<Listcomponent/>:<button>Click False</button>
        }
        </>
    )
    // {
    //     login 
    // ?
    // return(
    //     <button>click True</button>
    // )
    // :
    // return(
    // <button>click False</button>
    // )
    // }
}
export default Button2component