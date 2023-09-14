import React from "react";

interface WeatherProps {
  weatherData: any;
}

const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  return (
    <div className="weather1">
      <h4>현재 날씨</h4>
      <div className="w1-txt">
        <div>
          <div className="fspan">나라 : </div>
          <div className="sspan">{weatherData.sys.country}</div>
        </div>
        <div>
          <div className="fspan">도시 : </div>
          <div className="sspan">{weatherData.name}</div>
        </div>
        <div>
          <div className="fspan">온도 : </div>
          <div className="sspan">
            {weatherData.main.temp}°C (체감온도 : {weatherData.main.feels_like}
            °C)
          </div>
        </div>
        <div>
          <div className="fspan">습도 : </div>
          <div className="sspan">{weatherData.main.humidity}%</div>
        </div>
        <div>
          <div className="fspan">날씨 : </div>
          <div className="sspan">{weatherData.weather[0].description}</div>
        </div>
        <div>
          <div className="fspan">풍속 : </div>
          <div className="sspan">
            {weatherData.wind.speed}m/s({weatherData.wind.deg}°)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
