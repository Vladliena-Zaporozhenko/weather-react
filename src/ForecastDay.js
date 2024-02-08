import React from "react";
import Icons from "./Icons";
import "./Forecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="container ForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <Icons code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <strong>
          <span className="WeatherForecast-temperature-max">
            {maxTemperature()}
          </span>
        </strong>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
