import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherIcon.css";

export default function Forecast(props) {
  const [apiCall, setApiCall] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getForecast(response) {
    setForecast(response.data);
    setApiCall(true);
  }
  if (apiCall) {
    return (
      <div className="row">
        <div className="col-2">
          <div>10:00</div>
          <div>
            <WeatherIcon code={forecast.list[0].weather[0].icon} />
          </div>
          <div>{forecast.list[0].main.temp}</div>
        </div>
      </div>
    );
  } else {
    let apiKey = "117c16c8e34c1f00f925ddb4052594d6";
    let apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.place}&appid=${apiKey}&units=metric`;
    axios.get(apiForecastURL).then(getForecast);

    return props.place;
  }
}
