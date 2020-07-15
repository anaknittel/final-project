import React, { useState } from "react";
import "./WeatherUnits.css";

export default function WeatherUnits(props) {
  let celsius = props.Temperature;
  let fahrenheitToCelsius = celsius * 1.8 + 32;
  let fahrenheit = Math.round(fahrenheitToCelsius * 10) / 10;
  let [unit, setUnit] = useState("celsius");
  function fahrenheitUnit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsiusUnit(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <div className="WeatherTemperature">
          <span className="Temperature">{props.Temperature}</span>
          <span className="Units">
            {" "}
            ºC |{" "}
            <a href="/" onClick={fahrenheitUnit}>
              ºF{" "}
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="WeatherTemperature">
          <span className="Temperature">{fahrenheit}</span>
          <span className="Units">
            {" "}
            <a href="/" onClick={celsiusUnit}>
              ºC{" "}
            </a>
            | ºF{" "}
          </span>
        </div>
      </div>
    );
  }
}
