import React, { useEffect, useState } from "react";

function CountryTask() {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countryData();
  }, []);

  const countryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const dd = await response.json();
    setData(dd);
  };

  const handleSelectChange = (e) => {
    const countryName = e.target.value;
    const country = data.find(
      (country) => country.name.common === countryName
    );
    setSelectedCountry(country);
  };

  return (
    <div style={{
        textAlign: "center",
        width: "100%",
        padding: "20px",
        color: "white",
        backgroundImage: "url('https://i.pinimg.com/originals/95/bd/5c/95bd5cfd2927adf484b26a384c69ca20.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "5px",
        height:"100vh" 
      }}>
        <center>
      <select onChange={handleSelectChange} style={{marginTop:"80px"}}>
        <option value="">Select a country</option>
        {data.map((each) => (
          <option key={each.cca3} value={each.name.common}>
            {each.name.common}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div
          style={{
            marginTop: "100px",
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            width: "300px",
          }}
        >
          <h3>{selectedCountry.name.common}</h3>
          <img
            src={selectedCountry.flags.png}
            alt={`Flag of ${selectedCountry.name.common}`}
            height={100}
            style={{ borderRadius: "5px" }}
          />
          <p><strong>Region:</strong> {selectedCountry.region}</p>
          <p><strong>Capital:</strong> {selectedCountry.capital ? selectedCountry.capital[0] : "N/A"}</p>
          <p><strong>Population:</strong> {selectedCountry.population.toLocaleString()}</p>
        </div>
      )}
      </center>
    </div>
  );
}

export default CountryTask;
