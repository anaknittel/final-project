import React from "react";
import "./Description.css";

export default function Description(props) {
  if (props.weather == null) {
    return <h1>Please Search for a City </h1>;
  } else {
    return (
      <div>
        <hr width="450px" />
        <div className="row">
          <div className="col-6">
            <div className="City">{props.weather.name}</div>
            <div className="Date">Thursday, 4 June 2020</div>
            <ul>
              <li> {props.weather.main.temp}</li>
              <li>Feels like: {props.weather.weather[0].description}</li>
              <li>Humidity: {props.weather.main.humidity}%</li>
              <li>Wind Speed: {props.weather.wind.speed}m/s</li>
            </ul>
          </div>
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="sunny"
              height="100px"
            />

            <div id="currentTemperature">
              {props.weather.main.temp}
              <span className="units">ºC | ºF</span>
            </div>
          </div>
        </div>
        <hr width="450px" />
      </div>
    );
  }
}
