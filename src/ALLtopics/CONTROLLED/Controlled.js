import React, { useState } from "react";
import Test from "./Test";

function Controlled() {
  const [name, setName] = useState("");

  const handleData = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <center>
        name : {name} <br />
        <input type="text" onChange={handleData} />
        <Test handler={handleData}/>
      </center>
    </div>
  );
}

export default Controlled;
