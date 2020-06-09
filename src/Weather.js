import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [weather, getWeather] = useState(null);
  let apiKey = "117c16c8e34c1f00f925ddb4052594d6";

  if (weather == null) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response) {
      console.log(response.data);
      getWeather = response.data;
    }

    return <h1>Loading</h1>;
  } else {
    return (
      <div className="weather">
        <form>
          <div className="row" id="search-engine">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a City"
                className="form-control"
                autoFocus="on"
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
        <hr width="450px" />
        <div className="row">
          <div className="col-6">
            <div className="City">{getWeather.name}</div>
            <div className="Date">Thursday, 4 June 2020</div>
            <ul>
              <li>{getWeather.weather[0].description}</li>
              <li>Humidity: 80%</li>
              <li>Precipitation: 10%</li>
              <li>Wind Speed: 4m/s</li>
            </ul>
          </div>
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="sunny"
              height="100px"
            />

            <div id="currentTemperature">
              20<span className="units">ºC | ºF</span>
            </div>
          </div>
        </div>
        <hr width="450px" />
      </div>
    );
  }
}
