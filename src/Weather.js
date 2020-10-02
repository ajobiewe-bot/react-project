import React, { useState } from "react";
import axios from "axios";
import City from "./City";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "bfe05af20a66a64b4d832de4736023ff";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleLocation(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-7">
              <img
                src="https://images.pexels.com/photos/4210918/pexels-photo-4210918.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="card-img"
                alt="sky"
              />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <div className="card-text">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-10">
                        <input
                          type="search"
                          placeholder="Enter a city"
                          className="form-control"
                          autoFocus="on"
                          onChange={handleLocation}
                        />
                      </div>
                      <div className="col-2">
                        <button type="button" className="btn btn-outline-info">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                  <WeatherInfo data={weatherData} />
                  <City data={weatherData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
