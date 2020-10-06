import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="weatherForecast row">
        <WeatherForecastPreview code={forecast.list[0]} />
        <WeatherForecastPreview code={forecast.list[1]} />
        <WeatherForecastPreview code={forecast.list[2]} />
        <WeatherForecastPreview code={forecast.list[3]} />
        <WeatherForecastPreview code={forecast.list[4]} />
        <WeatherForecastPreview code={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "bfe05af20a66a64b4d832de4736023ff";

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return "null";
  }
}
