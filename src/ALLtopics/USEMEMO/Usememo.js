import React, { useMemo, useState } from "react";

function Usememo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);
//   const factorial = useMemo(() => {
//     fact(number);
//   }, [number]);
const factorial=fact(number)
  return (

    <div>
      <center>
        fact : {factorial} <br/>
        <button onClick={() => setCount(count + 1)}>Count</button> <br/>
        <button onClick={() => setNumber(number + 1)}>Number</button>
      </center>
    </div>
  );
}
const fact=(n)=>{
    let answer=1;
    for(var i=n;i>=1;i--){
        answer=answer*i
    }
    console.log("factorial function answer..");
    return answer
}

export default Usememo;
