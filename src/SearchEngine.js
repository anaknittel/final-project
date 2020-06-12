import React, { useState } from "react";
import axios from "axios";

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
  }

  function handleCityChange(event) {
    setCityName(event.target.value);
  }

  return (
    <div className="weather">
      <form onSubmit={handleSearch}>
        <div className="row" id="search-engine">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a City"
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              placeholder="Submit"
              className="btn btn-light w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
