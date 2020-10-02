import React from "react";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <p> Weather Details</p>
      <ul>
        <li>
          <Emoji label="humidity" symbol="💧" /> Humidity{" "}
          <span className="data">{props.data.humidity}%</span>
        </li>
        <li>
          <Emoji label="wind" symbol="💨" /> Wind Speed{" "}
          <span className="data">{props.data.wind}km/hr</span>
        </li>
        <li>
          Real feel
          <span className="data">{props.data.feelsLike}°C</span>{" "}
        </li>
      </ul>
      <hr className="lines" />
    </div>
  );
}
