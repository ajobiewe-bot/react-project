import React from "react";
import "./City.css";

export default function City() {
  let cityInfo = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    description: "Mostly Cloudy",
    city: "Vancouver",
  };
  return (
    <div className="city">
      <div class="card-img-overlay">
        <h3>
          <div className="temp">
            <span className="degree">26</span>
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
              <li className="cityName">{cityInfo.city}</li>
              <li className="date">
                <small>10:30 - Sunday, 27 Sept'20 </small>
              </li>
            </ul>
          </div>
          <div className="iconDescription">
            <ul>
              <li>
                <img src={cityInfo.imgUrl} alt={cityInfo.description} />
              </li>
              <li>{cityInfo.description}</li>
            </ul>
          </div>
        </h3>
      </div>
    </div>
  );
}
