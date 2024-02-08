import "./styles.css";

import "./Current.css";
import "./Forecast.css";

import Current from "./Current";

export default function App() {
  return (
    <div className="container">
      <div className="weather-wrapper">
        <Current />
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
