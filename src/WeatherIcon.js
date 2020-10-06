import React from "react";

export default function WeatherIcon(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.data}@2x.png`;
  return (
    <div className="weatherIcon">
      <img src={iconUrl} alt="icon" />
    </div>
  );
}
