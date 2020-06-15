import React from "react";

export default function Date(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.date.getMinutes();
  console.log(props.date.getMinutes());
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      <strong>Last update:</strong> {""}
      {day}, {hour}:{minutes}
    </div>
  );
}
