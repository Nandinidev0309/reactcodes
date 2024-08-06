

import { useHistory } from 'react-router-dom'

function Home() {
    let history=useHistory()
  return (
    <div>
      <center>
        <h1>Welcome To HomePage.............!!!!!!!!!!!!!!!!!!!!!!!11</h1>
        <button onClick={()=>history.push("./about")}>Login</button>
      </center>
    </div> 
  );
}

export default Home;