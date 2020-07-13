import React, { useState } from "react";

export default function WeatherUnits(props) {
  let [units, setUnits] = { metrics };
  return (
    <div>
      <div className="Temperature">
        {props.temperature} <span>ºC | ºF</span>
      </div>
    </div>
  );
}
