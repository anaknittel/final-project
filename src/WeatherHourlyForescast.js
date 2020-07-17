import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherHourlyForecast.css";

export default function WeatherHourlyForecast(props) {
  function forecastHour() {
    let date = new Date(props.data.dt * 1000);

    let hours = date.getHours();
    return `${hours}:00`;
  }

  function forecastTemperature() {
    let temperature = Math.round(props.data.main.temp * 10) / 10;
    return `${temperature}ºC`;
  }
  return (
    <div className="col">
      {forecastHour()}
      <div>
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div>{forecastTemperature()}</div>
    </div>
  );
}
