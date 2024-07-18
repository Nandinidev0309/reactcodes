// import axios from "axios";
// import { useEffect, useState } from "react";

// const Country = () => {

//     const [country,setCountry]=useState()
//   useEffect(() => {
//     fetchdata();
//   }, []);

//   const fetchdata = async () => {
//       const response = await axios.get("https://restcountries.com/v3.1/all");
//       console.log("response", response);
//         const data=countrydata(response.data)
    
//   };
//   const handleChange=(event)=>{
//     setCountry(event.target.value)
//   }


//   {countrydata.map((each) => {
//     return (
//       <>
//         <h2>{each.name.common}</h2>
        
//       </>
//     );
//   })}

//   return (
//     <>
//       <h2>country</h2>
//       <label htmlFor="dropdown">Select</label>
//             <select id="dropdown" value={country} onChange={handleChange}> 
//               <option value="option1">Option 1</option>
             
//             </select>
      
//     </>
//   );
// };
// export default Country;
