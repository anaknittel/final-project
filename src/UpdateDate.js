import React from "react";
import "./UpdateDate.css";
import UTC from "./UTC";

export default function updateTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(props.updateTime.dt * 1000);
  let day = days[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="string">
      <strong>Last update:</strong> {""}
      {day}, {hour}:{minutes} <UTC UTC={props.updateTime.timezone / 3600} />
    </div>
  );
}
