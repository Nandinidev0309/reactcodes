import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";
import { useSpring, animated } from "@react-spring/web";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  const API_KEY = "b3c20c127a381040c516719d1dd08bd9"; 

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setCity("");
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  const animationProps = useSpring({
    opacity: weather ? 1 : 0,
    transform: weather ? "translateY(0)" : "translateY(-50px)",
  });

  useEffect(() => {
    if (weather) {
      const temp = weather.main.temp;
      let bgImage = "";

      if (temp > 0 && temp < 10) {
        bgImage =
          "url(https://i.pinimg.com/236x/1a/9e/2b/1a9e2b45a616af2d1eabee649522a18f.jpg)";
      } else if (temp >= 10 && temp < 18) {
        bgImage =
          "url( https://i.pinimg.com/236x/f4/90/35/f49035f17c654d84db722823b523e1b3.jpg)";
      } else if (temp >= 19 && temp < 28) {
        bgImage =
          "url(https://i.pinimg.com/236x/74/36/16/7436166ee7ae27e68b4a0163b5a197f5.jpg)";
      } else {
        bgImage =
          "url(https://i.pinimg.com/236x/d3/26/8f/d3268f6292158bc55638556fbf0ee01e.jpg)";
      }

      setBackgroundImage(bgImage);
    }
  }, [weather]);

  return (
    <div className="weather-container" style={{ backgroundImage }}>
      <h1 className="heading" >Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="weather-input"
      />
      <button onClick={getWeather} className="weather-button">
        Get Weather
      </button>
      {weather && (
        <animated.div style={animationProps} className="weather-info">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </animated.div>
      )}
    </div>
  );
};

export default Weather;
