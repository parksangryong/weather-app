import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";
import L from "leaflet";
import custom from "./custom-marker.png";

// 사용자 정의 아이콘 생성
const customIcon = new L.Icon({
  iconUrl: custom, // 이미지 파일 경로
  iconSize: [32, 32], // 아이콘 크기
  iconAnchor: [16, 32], // 아이콘의 앵커 위치 (일반적으로 아이콘 하단 중앙)
});

interface MapCardProps {
  data: any;
  place: string;
}

const Weather3: React.FC<MapCardProps> = ({ data, place }) => {
  return (
    <div className="weather3">
      <h4>지도</h4>
      <MapContainer
        center={[data.coord.lat, data.coord.lon]}
        zoom={5}
        style={{ height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data.coord.lat, data.coord.lon]} icon={customIcon}>
          <Popup>{place}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Weather3;
