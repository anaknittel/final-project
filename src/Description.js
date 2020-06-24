import React from "react";
import "./Description.css";
import UpdateDate from "./UpdateDate";
import LocalTime from "./LocalTime";
import UTC from "./UTC";

export default function Description(props) {
  if (props.weather == null) {
    return <h1>Please Search for a City </h1>;
  } else {
    let temperature = Math.round(props.weather.main.temp * 10) / 10;
    let feelsLike = Math.round(props.weather.main.feels_like * 10) / 10;
    //let iconUrl = props.weather.weather[0].icon;

    let updateDate = props.weather;
    let localUTC = props.weather.timezone / 3600;
    return (
      <div>
        <hr width="450px" />
        <div className="row">
          <div className="col-6">
            <div className="City">{props.weather.name}</div>
            <LocalTime UTC={localUTC} />
            <UTC UTC={localUTC} />
            <ul>
              <li>
                <strong>Feels Like: </strong>
                {feelsLike}ºC
              </li>
              <li className="capitalize">
                <strong>Description:</strong>{" "}
                {props.weather.weather[0].description}
              </li>
              <li>
                <strong>Humidity:</strong> {props.weather.main.humidity}%
              </li>
              <li>
                <strong>Wind Speed:</strong> {props.weather.wind.speed}m/s
              </li>
            </ul>
          </div>
          <div className="col-6">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt={props.weather.weather[0].description}
              height="100px"
            />

            <div id="currentTemperature">
              {temperature}
              <span className="units">ºC | ºF</span>
            </div>
          </div>
        </div>
        <hr width="450px" />
        <UpdateDate updateTime={updateDate} />
      </div>
    );
  }
}
