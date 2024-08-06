import React from 'react'
import useAxios from './useAxios-Function';
import { Spinner } from 'react-bootstrap';

function Fetch() {
    const [user, error, loading] = useAxios("https://fakestoreapi.com/users");
  console.log(user, error, loading, "fetching data");

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <h4>Something went wrong... please try again</h4>;
  }
  return (
    <div>
    
    {user.map((each) => (
        
      <div key={each.id}>
        <center>
        <h3>NAME : {each.username}</h3>
        <h4>email : {each.password}</h4>
        <h4>password : {each.email}</h4>
        <h4>phone_number : {each.phone}</h4>
        <hr/>
        </center>
      </div>
    ))}
  </div>
  )
}

export default Fetch