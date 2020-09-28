import React from "react";
import "./Weather.css";

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

export default function Weather() {
  return (
    <div className="weather">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-7">
            <img
              src="https://images.pexels.com/photos/443356/pexels-photo-443356.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="card-img"
              alt="sky"
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <div className="card-text">
                <div className="row">
                  <div className="col-10">
                    <form>
                      <input
                        type="search"
                        placeholder="Enter a city"
                        className="form-control"
                      />
                    </form>
                  </div>
                  <div className="col-2">
                    <button type="button" className="btn btn-outline-info">
                      Search
                    </button>
                  </div>
                </div>
                <p> Weather Details</p>
                <ul>
                  <li>
                    <Emoji label="humidity" symbol="💧" /> Humidity{" "}
                    <span className="data">50%</span>
                  </li>
                  <li>
                    <Emoji label="wind" symbol="💨" /> Wind Speed{" "}
                    <span className="data">5km/hr</span>
                  </li>
                  <li>
                    Real feel<span className="data">23°C</span>{" "}
                  </li>
                </ul>
                <hr className="lines" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
