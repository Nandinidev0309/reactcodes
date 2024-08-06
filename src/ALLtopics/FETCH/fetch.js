import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
    // .then((data)=>console.log(data))
  }, []);
  // const fetchData=async()=>{
  //     const res=await fetch("https://fakestoreapi.com/products")
  //     const dd=await res.JSON()
  //     console.log(dd);

  // }
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {data.map((each) => {
        return (
          <div
            style={{ border: "1px solid black", padding: "20px", width: "30%" }}
          >
            <center>
              <h1>{each.title}</h1>
              <img src={each.image} alt={each.title} height={100} width={100} />
              <p>Description : {each.description}</p>
              <button> price : {each.price}</button>
              <p> rating : {each.rating && each.rating.rate}</p>
            </center>
          </div>
        );
      })}
      
    </div>
  );
}

export default Fetch;
