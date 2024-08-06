// import React, { useState } from 'react';

// function WeatherTask() {
//   const [search, setSearch] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const apiKey = "bd5e378503939ddaee76f12ad7a97608";

//   const weatherData = async () => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
//       );
//       if (!response.ok) {
//         throw new Error('City not found');
//       }
//       const data = await response.json();
//       setWeather(data);
//       setError(null);  
//     } catch (err) {
//       setError(err.message);
//       setWeather(null);  
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (search.trim()) {
//       weatherData();
//     }
//   };
 

//   return (

   
//     <div>
//       <center>
//       <h1>WEATHER </h1>
//       <form onSubmit={handleSearchSubmit}>
//         <input 
//           type="text" 
//           value={search} 
//           onChange={handleSearchChange} 
//           placeholder="Enter city name" 
//         />
//         <button type="submit">Search</button>
//       </form>

//       {error && <p>{error}</p>}

//       {weather && (
//         <div 
//           style={{
//             marginTop: "20px",
//             padding: "20px",
//             backgroundColor: "black",
//             color: "white",
//             borderRadius: "5px",
//             boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
//             width: "300px",
//           }}
//         >
//           <h3>{weather.name}, {weather.sys.country}</h3>
//           <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
//           <p><strong>Weather:</strong> {weather.weather[0].description}</p>
//           <p><strong>Humidity:</strong> {weather.main.humidity} %</p>
//           <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
//         </div>
//       )}
//       </center>
//     </div>
//   );
// }

// export default WeatherTask;


// ................................................ 

import React, { useState } from 'react';

function WeatherTask() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "bd5e378503939ddaee76f12ad7a97608";

  const weatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
      setError(null);  // Clear any previous errors
    } catch (err) {
      setError(err.message);
      setWeather(null);  // Clear previous weather data if there was an error
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      weatherData();
    }
  };

  return (
    <div>
      <center>
        <h1>Weather</h1>
       
        <marquee direction="right" style={{marginTop:"20px"}}><b>Weather - Forecast</b></marquee>
        
        <form onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            value={search} 
            onChange={handleSearchChange} 
            placeholder="Enter city name" 
            style={{marginTop:"40px"}}
          />
          <button type="submit">Search</button>
        </form>

        {error && <p>{error}</p>}

        {weather && (
          <div 
            style={{
              marginTop: "50px",
              padding: "20px",
              backgroundColor: "#333",
              color: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              width: "300px",
              textAlign: "left"
            }}
          >
            <h3>{weather.name}, {weather.sys.country}</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img 
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt={`Weather icon of ${weather.weather[0].description}`} 
                style={{ marginRight: "10px" }}
              />
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>{weather.main.temp} °C</p>
            </div>
            <p style={{ textTransform: "capitalize" }}><strong>Weather:</strong> {weather.weather[0].description}</p>
            <p><strong>Humidity:</strong> {weather.main.humidity} %</p>
            <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
          </div>
        )}
      </center>
    </div>
  );
}

export default WeatherTask;
