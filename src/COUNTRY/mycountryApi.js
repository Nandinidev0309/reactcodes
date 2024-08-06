// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./mycountryApi.css";

// function Countries() {
//   const [country, setCountry] = useState([]);
//   const [selectCountry, setSelectCountry] = useState("");
//   const [selectedCountryData, setSelectedCountryData] = useState({});

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const response = await axios.get("https://restcountries.com/v3.1/all");
//     const result = nameExtractor(response.data);
//     setCountry(result);
//   };

//   function nameExtractor(data) {
//     return data.map((each) => each.name.official);
//   }

//   function selectCountryHandler(event) {
//     event.preventDefault();
//     setSelectCountry(event.target.value);
//     fetchSelectedCountry(event.target.value);
//   }

//   const fetchSelectedCountry = async (countryName) => {
//     const response1 = await axios.get(
//       `https://restcountries.com/v3.1/name/${countryName}`
//     );
//     setSelectedCountryData(response1.data[0]);
//   };

//   return (
//     <>
//       <h2>Country Listing</h2>
//       <select onChange={selectCountryHandler} value={selectCountry}>
//         {country.map((eachCountry, i) => (
//           <option value={eachCountry} key={i}>
//             {eachCountry}
//           </option>
//         ))}
//       </select>
//       <br />
//       {Object.keys(selectedCountryData).length > 0 && (
//         <div className="country-card">
//           <h2 className="country-name">{selectedCountryData.name.common}</h2>
//           <img
//             src={selectedCountryData.flags.png}
//             alt={selectedCountryData.flags.alt}
//             className="flag-image"
//           />
//           <h3 className="capital">
//             Capital: <span>{selectedCountryData.capital}</span>
//           </h3>
//           <h3 className="population">
//             Population: <span>{selectedCountryData.population}</span>
//           </h3>
//           <h3 className="region">
//             Region: <span>{selectedCountryData.region}</span>
//           </h3>
//           <h3 className="continent">
//             Continent: <span>{selectedCountryData.continents}</span>
//           </h3>
//           <h3 className="location">
//             Location:{" "}
//             <a href={selectedCountryData.maps.googleMaps}>Google Maps</a>
//           </h3>
//           <img
//             src={selectedCountryData.coatOfArms.png}
//             height={200}
//             width={200}
//             className="coat-of-arms"
//             alt={selectedCountryData.flags.alt}
//           />
//         </div>
//       )}
//     </>
//   );
// }

// export default CountriesApi;
