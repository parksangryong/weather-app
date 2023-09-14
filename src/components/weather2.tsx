import React from "react";

interface WeatherProps {
  foreweather: any;
}

const Weather2: React.FC<WeatherProps> = ({ foreweather }) => {
  return (
    <div className="weather2">
      <div>{foreweather.dt_txt}</div>
      <div>온도: {foreweather.main.temp}°C</div>
      <div>습도: {foreweather.main.humidity}%</div>
      <div>날씨: {foreweather.weather[0].description}</div>
    </div>
  );
};

export default Weather2;
