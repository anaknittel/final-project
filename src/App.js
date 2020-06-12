import React, { useState } from "react";
import SearchEngine from "./SearchEngine";
import Description from "./Description";
import "./App.css";

export default function App() {
  let [weather, setWeather] = useState();
  return (
    <div className="App">
      <div className="container">
        <SearchEngine setWeather={setWeather} />
        <p />
        <Description weather={weather} />
        <footer>This App was created by Ana Knittel</footer>
      </div>
    </div>
  );
}
