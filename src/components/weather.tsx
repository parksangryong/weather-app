import React from "react";

interface WeatherProps {
  weatherData: any;
}

const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  return (
    <div>
      <h4>현재 날씨</h4>
      <p>나라 : {weatherData.sys.country}</p>
      <p>도시: {weatherData.name}</p>
      <p>
        온도: {weatherData.main.temp}°C (체감온도 :{" "}
        {weatherData.main.feels_like}
        °C)
      </p>
      <p>습도 : {weatherData.main.humidity}%</p>
      <p>날씨: {weatherData.weather[0].description}</p>
      <p>
        바람: 속도({weatherData.wind.speed}m/s) / 각도({weatherData.wind.deg}°)
        / 돌풍({weatherData.wind.gust}m/s)
      </p>
    </div>
  );
};

export default Weather;
