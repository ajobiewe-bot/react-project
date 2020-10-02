import React from "react";
import FormattedDate from "./FormattedDate";
import "./City.css";

export default function City(props) {
  return (
    <div className="city">
      <div className="card-img-overlay">
        <h3>
          <div className="temp">
            <span className="degree"> {props.data.temperature}</span>
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
              <li className="cityName">{props.data.city}</li>
              <li className="date">
                <small>
                  <FormattedDate date={props.data.date} />
                </small>
              </li>
            </ul>
          </div>
          <div className="iconDescription">
            <ul>
              <li>
                <img src={props.data.imgUrl} alt={props.data.description} />
              </li>
              <li>{props.data.description}</li>
            </ul>
          </div>
        </h3>
      </div>
    </div>
  );
}
