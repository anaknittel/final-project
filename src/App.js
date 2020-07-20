import React, { useState } from "react";
import SearchEngine from "./SearchEngine";
import Description from "./Description";

import "./App.css";

export default function App() {
  let [weather, setWeather] = useState();
  return (
    <div className="App">
      <div className="container">
        <SearchEngine setWeather={setWeather} />
        <Description weather={weather} />
      </div>
      <footer>
        Open Sourced App created by Ana Knittel{" "}
        <span>
          <a href="https://github.com/anaknittel/weather_app" id="github-link">
            {" "}
            <img
              src="https://github.githubassets.com/images/modules/open_graph/github-mark.png"
              height="20"
              alt="GitHub Link"
              id="github-logo"
            />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/ana-knittel-749522171/"
            id="linkedin-link"
          >
            {" "}
            <img
              src="https://img2.gratispng.com/20180529/str/kisspng-linkedin-computer-icons-logo-professional-network-social-networks-5b0d65b29ec943.2054111815276046586504.jpg
"
              height="20"
              alt="LinkedIn Link"
              id="linkedin-logo"
            />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/ana.knittel/" id="instagram-link">
            {" "}
            <img
              src="https://portugalonline.com.br/wp-content/uploads/2017/06/logo-instagram.png"
              height="20"
              alt="Instagram Link"
              id="instagram-logo"
            />
          </a>
        </span>
      </footer>
    </div>
  );
}
