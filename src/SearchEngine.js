import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  let apiKey = "117c16c8e34c1f00f925ddb4052594d6";
  let [cityName, setCityName] = useState("Lisbon");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  function handleSearch(event) {
    event.preventDefault();
    axios.get(apiUrl).then(getWeather);
  }

  function getWeather(response) {
    props.setWeather(response.data);
    console.log(response.data);
  }

  function handleCityChange(event) {
    setCityName(event.target.value);
  }

  function handlePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  return (
    <div className="weather">
      <form onSubmit={handleSearch}>
        <div className="row" id="search-engine">
          <div className="col-9" id="search">
            <input
              type="search"
              placeholder="Search for a City"
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3" id="submit">
            <input
              type="submit"
              placeholder="Submit"
              className="btn btn-light "
            />
          </div>
          <div className="col-2" id="current">
            <input
              type="text"
              placeholder="Current Place"
              className="btn "
              onClick={getCurrentPosition}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
