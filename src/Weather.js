import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <form>
        <div className="row" id="search-engine">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a City"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              placeholder="Submit"
              className="btn btn-light"
            />
          </div>
        </div>
      </form>
      <hr />
      <div className="row">
        <div className="col-6">
          <div className="City">Lisbon</div>
          <div className="Date">Thursday, 4 June 2020</div>
          <ul>
            <li>Sunny</li>
            <li>Humidity: 80%</li>
            <li>Precipitation: 10%</li>
            <li>Wind Speed: 4m/s</li>
          </ul>
        </div>
        <div className="col-6">
          <img
            src="https://www.ipma.pt/opencms/bin/icons/svg/weather/w_ic_d_01anim.svg"
            alt="sunny"
            height="100px"
          />

          <div id="currentTemperature">
            20<span className="units">ºC | ºF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
