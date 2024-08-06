

function Home(match) {
    
  return (
    <div>
      <center>
        <h1>Welcome To HomePage : {match.params.name} </h1>
        
      </center>
    </div> 
  );
}

export default Home;