import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="temp">
        <span className="degree"> {props.celsius}</span>
        <sup className="units">
          <span className="units">°C </span>
          <span className="units">|</span>
          <a href="/" className="units" onClick={convertToFahrenheit}>
            °F
          </a>
        </sup>
      </div>
    );
  } else {
    return (
      <div className="temp">
        <span className="degree">{Math.round(fahrenheit())}</span>
        <sup className="units">
          <a href="/" className="units" onClick={convertToCelsius}>
            °C{" "}
          </a>{" "}
          <span className="units">|</span>
          <span className="units"> °F </span>
        </sup>
      </div>
    );
  }
}
