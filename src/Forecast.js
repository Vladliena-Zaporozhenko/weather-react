import React from "react";

export default function Forecast() {
  return (
    <div className="forecastDay">
      <strong className="day">Day</strong>
      <p>☀️</p>
      <p className="forecastTemp">
        <strong>high</strong> low
      </p>
    </div>
  );
}
