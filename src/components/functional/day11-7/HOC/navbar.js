
import addProfile from "./profile_HOC";

const NavbarComponent=(props)=>{
    console.log(props, " from addprofile" );
    return(
        <>
        <h2>Good Morning {props.data.name}</h2>
        <h2>hello bunny</h2>
        <button>Click Me For Now</button>
        </>
    )
}
export default addProfile(NavbarComponent)