import React from "react";

import "./City.css";

export default function City(props) {
  return (
    <div className="city">
      <div className="card-img-overlay">
        <h3>
          <div className="temp">
            <span className="degree"></span>
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
              <li className="cityName">{props.city}</li>
              <li className="date">
                <small>10:30 - Sunday, 27 Sept'20 </small>
              </li>
            </ul>
          </div>
          <div className="iconDescription">
            <ul>
              <li>
                <img src={props.imgUrl} alt={props.description} />
              </li>
              <li>{props.description}</li>
            </ul>
          </div>
        </h3>
      </div>
    </div>
  );
}
