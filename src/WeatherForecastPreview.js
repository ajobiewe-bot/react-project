import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function weatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.code.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function temperature() {
    let temperature = Math.round(props.code.main.temp);

    return ` ${temperature}°C`;
  }
  return (
    <div className="weatherForecastPreview col-4">
      <div className="col">{hours()}</div>
      <div className="col weatherIcon">
        <WeatherIcon data={props.code.weather[0].icon} />
      </div>
      <div className="col temp">{temperature()}</div>
    </div>
  );
}
