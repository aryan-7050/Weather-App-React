import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "74ac50378f2d528c6a5bbea27b9f14b1";
  const getWeather = async (city) => {
    setLoading(true);
    setWeatherInfo(null);

    try {
      const res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      const info = {
        city: data.name,
        temp: data.main.temp,
        feelslike: data.main.feels_like,
        tempmin: data.main.temp_min,
        tempmax: data.main.temp_max,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
      };

      setWeatherInfo(info);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="appContainer">
      <SearchBox onSearch={getWeather} />

      {loading && <div className="loader">Fetching weather data ⏳</div>}

      {!loading && !weatherInfo && (
        <div className="emptyState">
          🌍 Enter a city name to see weather details
        </div>
      )}

      {weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}

export default App;
