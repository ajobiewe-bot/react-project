import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <p> Weather Details</p>
      <ul>
        <li className="details">
          Real feel
          <span className="data">{props.data.feelsLike}°C</span>{" "}
        </li>
        <li>
          Humidity
          <span className="data">{props.data.humidity}%</span>
        </li>
        <li>
          Wind Speed
          <span className="data">{props.data.wind}km/hr</span>
        </li>
      </ul>
      <hr className="lines" />
    </div>
  );
}
