import React from "react";
import "./UpdateDate.css";

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

  let date = getTimeDiff();
  date.setTime(date.getTime() + props.UTC * 3600 * 1000);

  let day = days[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  function getTimeDiff() {
    let date = new Date(props.updateTime.dt * 1000);
    date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  }

  return (
    <div className="string">
      <strong>Last update:</strong> {""}
      {day}, {hour}:{minutes}
    </div>
  );
}
