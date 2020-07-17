import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherHourlyForecast from "./WeatherHourlyForescast";

export default function Forecast(props) {
  const [apiCall, setApiCall] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getForecast(response) {
    setForecast(response.data);
    setApiCall(true);
  }

  if (apiCall && props.city === forecast.city.name) {
    return (
      <div className="row">
        {forecast.list.slice(0, 6).map(function (forecastHour) {
          return <WeatherHourlyForecast data={forecastHour} />;
        })}
      </div>
    );
  } else {
    let apiKey = "117c16c8e34c1f00f925ddb4052594d6";
    let apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.place}&appid=${apiKey}&units=metric`;
    axios.get(apiForecastURL).then(getForecast);
    return props.place;
  }
}
