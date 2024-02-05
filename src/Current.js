import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./FormattedDate";

import "./styles.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState("");

  function showWeather(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);

    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=beb2ed908614f0db3f28d72676d2e7bd&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} id="enterCity">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <input
              onChange={updateCity}
              type="text"
              className="form-control entercity"
              placeholder="Enter a city..."
              autoFocus="on"
              id="city-input"
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              className="btn btn-primary"
              id="button-search"
              value="Search"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="currentinfo">
        {form}
        <div className="row">
          <div className="col-6">
            <h3 className="text-capitalize" id="cityName">
              <strong>{city}</strong>
            </h3>
            <div>
              <p id="currentDayTime">
                <FormattedDate date={new Date()} />
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6" id="tempCurrent">
            <h1>
              <img src={icon} alt="weatherIcon" />
              <span id="tempNow">{Math.round(temperature)}</span>
              <span className="unit">°C</span>
            </h1>
          </div>
          <div className="col-5">
            <ul id="tempCurrent">
              <li className="text-capitalize">{description}</li>
              <li>
                Humidity: <strong>{humidity}</strong>%
              </li>
              <li>
                Wind: <strong>{wind}</strong> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
