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
  let day = days[props.updateTime.getDay()];
  let hour = props.updateTime.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.updateTime.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="string">
      <strong>Last update:</strong> {""}
      {day}, {hour}:{minutes}
    </div>
  );
}
