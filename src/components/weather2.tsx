import React from "react";

interface WeatherProps {
  foreweather: any;
}

const Weather2: React.FC<WeatherProps> = ({ foreweather }) => {
  return (
    <div>
      <p>날짜: {foreweather.dt_txt}</p>
      <p>온도: {foreweather.main.temp}°C</p>
      <p>습도: {foreweather.main.humidity}%</p>
      <p>날씨: {foreweather.weather[0].description}</p>
    </div>
  );
};

export default Weather2;
