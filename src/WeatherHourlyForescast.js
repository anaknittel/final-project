import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherHourlyForecast.css";

export default function WeatherHourlyForecast(props) {
  let date = new Date(props.data.dt * 1000);
  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  date.setTime(date.getTime() + props.UTC * 60 * 60 * 1000);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

  let day = days[date.getUTCDay()];

  let hours = date.getHours();

  function forecastTemperature() {
    let temperature = Math.round(props.data.main.temp * 10) / 10;
    return `${temperature}ºC`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div className="col">
      <div>
        <div>
          <strong>{day}</strong>
        </div>
        {hours}:00
      </div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div>{forecastTemperature()}</div>
    </div>
  );
}
