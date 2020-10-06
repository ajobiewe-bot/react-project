import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./City.css";

export default function City(props) {
  return (
    <div className="city">
      <h3>
        <WeatherTemperature celsius={props.data.temperature} />
        <div className="iconDescription">
          <ul>
            <li>
              <img src={props.data.iconUrl} alt={props.data.description} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="cityInfo">
          <ul>
            <li className="cityName">{props.data.city}</li>
            <li className="date">
              <small>
                <FormattedDate date={props.data.date} />
              </small>
            </li>
          </ul>
        </div>
      </h3>
    </div>
  );
}
