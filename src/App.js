import "./styles.css";

import "./Current.css";
import "./Forecast.css";

import Current from "./Current";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="container">
      <div className="weather-wrapper">
        <Current />
        <span className="forecastInfo">
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </span>
      </div>
      <footer>
        <div id="linkCode">
          <a
            href="https://github.com/Vladliena-Zaporozhenko/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Vladliena Zaporozhenko
        </div>
      </footer>
    </div>
  );
}
