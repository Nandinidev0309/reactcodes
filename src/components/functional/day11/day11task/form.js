export const Forms=()=>{
    return(
        <>
        <form>
            <label for="first">Full Name : </label>
            <input type="text" id="first" /><br></br>
            <label for="last">Last Name : </label>
            <input type="text" id="last" /><br></br>
            <label for="pass">Password : </label>
            <input type="password" id="pass" /><br></br>
            <input type="submit"/>

        </form> 

        <fieldset>
            <legend>Table</legend>
            <caption>Table</caption>
        
        <table>
            <tr>
                <th>First Name </th> 
                 <th> Last Name</th>
                 <th> Year</th>
            </tr>
            <tr>
                <td>Nandini</td>
                <td>Madhireddy</td>
                <td>2002</td>
            </tr>
            <tr>
                <td>Pravasthu</td>
                <td>Gollipally</td>
                <td>2005</td>
            </tr>
            <tr>
                <td>Sameeksha</td>
                <td>Mucharla</td>
                <td>2016</td>
            </tr>
            <tr>
                <td>Shabdha</td>
                <td>Nimma</td>
                <td>2002</td>
            </tr>
            <tr>
                <td>Manasa</td>
                <td>Vanga</td>
                <td>1999</td>
            </tr>
            
        </table>
        </fieldset>
        </>
    )
} 

// let n="coders@123"
// s=n.length 
// alpha=""
// char=""
// no=""  

// for(i=1;i<=s;i++){
//     if(a-z== n || A-z == n){
//         alpha=n.i
//     }
//     console.log(alpha);
// }


