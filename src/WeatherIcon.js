import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  const codeMappingDay = {
    "01d": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "03d": "PARTLY_CLOUDY_DAY",
    "04d": "CLOUDY;",
    "09d": "RAIN",
    "10d": "RAIN",
    "11d": "RAIN",
    "13d": "SNOW",
    "50d": "FOG",
  };
  const codeMappingNight = {
    "01n": "CLEAR_NIGHT",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04n": "CLOUDY",
    "09n": "RAIN",
    "10n": "RAIN",
    "11n": "RAIN",
    "13n": "SNOW",
    "50n": "FOG",
  };

  if (codeMappingDay) {
    return (
      <ReactAnimatedWeather
        icon={codeMappingDay[props.code]}
        color="orange"
        size={20}
        animate={true}
      />
    );
  }
  if (codeMappingNight) {
    return (
      <ReactAnimatedWeather
        icon={codeMappingNight[props.code]}
        color="black"
        size={20}
        animate={true}
      />
    );
  }
}
