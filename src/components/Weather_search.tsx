import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./weather";
import Weather2 from "./weather2";
import Weather3 from "./weather3";

const API_KEY = "8d5c271d5aeaf42cb0a8625bd3598f92";

function WeatherSearch() {
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [foreweatherData, setforeWeatherData] = useState<any[]>([]);
  //  api에서 받아올 날씨 데이터
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  // 위도 및 경도

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
    console.log(response.data);
    setWeatherData(response.data);

    const fresponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(fresponse.data.list);
    setforeWeatherData(fresponse.data.list);
  };

  return (
    <div className="w-search">
      <h3>검색한 지역 날씨 정보</h3>
      <label>위도 : </label>
      <input
        type="number"
        value={latitude}
        onChange={(e) => setLatitude(e.target.valueAsNumber)}
      />
      <label>경도 : </label>
      <input
        type="number"
        value={longitude}
        onChange={(e) => setLongitude(e.target.valueAsNumber)}
      />
      {loading && <p>날씨 정보를 불러오는 중...</p>}
      {error && <p>{error}</p>}
      {weatherData && <Weather weatherData={weatherData} />}
      <hr />
      {foreweatherData && <h4>5일간 날씨</h4>}
      {foreweatherData &&
        foreweatherData.map((forecast: any, index: number) => (
          <Weather2 key={index} foreweather={forecast} />
        ))}
      {weatherData && weatherData.coord && (
        <Weather3 data={weatherData} place={weatherData.name} />
      )}
    </div>
  );
}

export default WeatherSearch;
