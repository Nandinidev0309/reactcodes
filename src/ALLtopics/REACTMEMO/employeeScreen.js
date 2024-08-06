import React, { useState } from "react";
import Heading from "./heading";

function Employeescreen() {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <Heading name="guest" />
      <button onClick={() => setFlag(!flag)}>flag Change</button>
      {flag ? <h2>flag is true</h2> : <h2>flag is false</h2>}
    </div>
  );
}

export default Employeescreen;