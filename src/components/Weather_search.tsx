import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./weather";
import Weather2 from "./weather2";
import Weather3 from "./weather3";
import dayjs from "dayjs";

const API_KEY = "8d5c271d5aeaf42cb0a8625bd3598f92";

function WeatherSearch() {
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [foreweatherData, setforeWeatherData] = useState<any[]>([]);
  //  api에서 받아올 날씨 데이터
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState<number>(37.5665);
  const [longitude, setLongitude] = useState<number>(126.978);
  // 위도 및 경도

  const currentDate = dayjs().format("YYYY-MM-DD HH:mm:ss");

  useEffect(() => {
    // 위치 정보를 가져오는 함수
    const getLocation = async () => {
      try {
        // 날씨 정보를 가져오는 함수
        fetchWeather(latitude, longitude);
        setLoading(false);
      } catch (error) {
        setError("날씨 정보를 가져오지 못했습니다.");
        setLoading(false);
      }
    };
    getLocation();
  }, [latitude, longitude]);

  // OpenWeatherMap API를 통해 날씨 정보 가져오기
  const fetchWeather = async (latitude: number, longitude: number) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    //console.log(response.data);
    setWeatherData(response.data);

    const fresponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    //console.log(fresponse.data.list);
    setforeWeatherData(fresponse.data.list);
  };

  return (
    <div className="home">
      <div className="home-info">
        <div className="lati">
          <label>위도 : </label>
          <input
            type="number"
            min="-90"
            max="90"
            step="0.01"
            value={latitude}
            onChange={(e) => setLatitude(e.target.valueAsNumber)}
          />
        </div>
        <div className="long">
          <label>경도 : </label>
          <input
            type="number"
            min="-180"
            max="180"
            step="0.01"
            value={longitude}
            onChange={(e) => setLongitude(e.target.valueAsNumber)}
          />
        </div>
        <div className="date">
          <label>시각 : </label>
          <input type="text" value={currentDate} readOnly />
        </div>
      </div>
      <div className="home-search1">
        {loading && <p>날씨 정보를 불러오는 중...</p>}
        {error && <p>{error}</p>}
        {weatherData && <Weather weatherData={weatherData} />}
      </div>
      <div className="home-search2">
        {weatherData && <h4>5일간 날씨</h4>}
        {foreweatherData &&
          foreweatherData.map((forecast: any, index: number) => (
            <Weather2 key={index} foreweather={forecast} />
          ))}
      </div>
      <div className="home-search3">
        {weatherData && weatherData.coord && (
          <Weather3 data={weatherData} place={weatherData.name} />
        )}
      </div>
    </div>
  );
}

export default WeatherSearch;
