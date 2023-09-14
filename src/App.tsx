import Header from "./components/header";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WeatherSearch from "./components/Weather_search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<WeatherSearch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
