import React from "react";

export default function LocalTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  let date = getDateInUTC();

  date.setTime(date.getTime() + props.UTC * 3600 * 1000);

  let day = days[date.getUTCDay()];

  let realHour = date.getHours();

  if (realHour < 10) {
    realHour = `0${realHour}`;
  }

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      <strong>Local Time:</strong> {""}
      {day}, {realHour}:{minutes}
    </div>
  );
}

function getDateInUTC() {
  let date = new Date();

  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  return date;
}
