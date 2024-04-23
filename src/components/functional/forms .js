const Formcomponent=()=>{
    return(
        <div>
        <form>
           <label for="first">FirstName</label>
            <input type="text" id="first"/> 
            <br/>
            <br/>
            <label for="second">SecondName</label>
            <input type="text" id="second"/> 
            <br/>
            <br/>
            <label for="third">Password</label>
            <input type="password" id="third"/>
            <br></br>
            <input type="submit"/>
        </form>
        <hr></hr>
        </div>
    )
}
export default Formcomponent