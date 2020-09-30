import React from "react";
import FormattedDate from "./FormattedDate";
import "./City.css";

export default function City(props) {
  return (
    <div className="city">
      <div className="card-img-overlay">
        <h3>
          <div className="temp">
            <span className="degree"> {props.cityData.temperature}</span>
            <sup className="units">
              <a href="/" className="units active">
                °C{" "}
              </a>{" "}
              <span className="units active">|</span>
              <a href="/" className="units">
                °F{" "}
              </a>
            </sup>
          </div>

          <div className="cityInfo">
            <ul>
              <li className="cityName">{props.cityData.city}</li>
              <li className="date">
                <small>
                  <FormattedDate date={props.cityData.date} />
                </small>
              </li>
            </ul>
          </div>
          <div className="iconDescription">
            <ul>
              <li>
                <img
                  src={props.cityData.imgUrl}
                  alt={props.cityData.description}
                />
              </li>
              <li>{props.cityData.description}</li>
            </ul>
          </div>
        </h3>
      </div>
    </div>
  );
}
