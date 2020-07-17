import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherHourlyForecast(props) {
  return (
    <div>
      {new Date(props.data.dt * 1000).getHours()}: 00
      <div>
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div>{Math.round(props.data.main.temp)}ºC</div>
    </div>
  );
}
