// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function UseEffectEX1() {
//     const [Data,setData]=useState([])
//     useEffect(()=>{
//         console.log("use effect executing");
//         // performs Side Effects
//         fetchData()
//     },[])


//     const fetchData=async()=>{
//         try{
//        const response1=await axios.get("https://fakestoreapi.com/products")
//                console.log(response1,"response1");
               
//                if (response1.status===200){
//                     setData(response1.data)
//                }
//         } catch(err){
//         }
//         finally{ 
//         }
    
//     }


//   return (
//     <div>
//       {
//         Data.length>0 && <>
//         {
//           Data.map((each)=>{
//             return (
//               <>
//               <h3>{each.title}</h3>
//               </>
//             )
//           })
//         }

//         </>

//       }
//      </div>
//   )
// }

// export default UseEffectEX1  




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../useEffect/useEffect.css"
import { Spinner } from 'react-bootstrap';

function UseEffectEX1() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("useEffect executing");
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response, "response");

            if (response.status === 200) {
                setData(response.data);
            }
        } catch (err) {
            setError('Failed to fetch data');
            console.error(err);
        }
    };

    return (
        <div className="container">
            {error && <p>{error}</p>}
            {data.length > 0 ? (
                <div className="card-grid">
                    {data.map((each) => (
                        <div key={each.id} className="card">
                            <img src={each.image} alt={each.title} className="card-img"  />
                            <div className="card-content">
                                <h3>{each.title}</h3>
                                <p>{each.description}</p>
                                <p><strong>Category:</strong> {each.category}</p>
                                <p><strong>Price:</strong> ${each.price}</p>
                                <p><strong>Rating:</strong> {each.rating.rate} ({each.rating.count} reviews)</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p><Spinner/></p>
            )}
        </div>
    );
}

export default UseEffectEX1;
