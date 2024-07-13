import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../useEffect/useEffect.css"
import { Spinner } from 'react-bootstrap';

function BothCombineEx12() {
    const [data, setData] = useState([]);
    const [count1,setCount1]=useState(0)

    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("useEffect executing");
        fetchData();
    });


    const countHandler1=(()=>{
        setCount1(count1+1)
    })

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
            <h2>Count{count1}</h2>
        <button onClick={countHandler1}>Increase count 1</button>
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

export default BothCombineEx12;