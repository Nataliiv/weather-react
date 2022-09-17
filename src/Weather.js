import axios from "axios";
import React from "react";
import Forecast from "./Forecast";


export default function Weather(props) {
	 let weatherData = {
     city: "Komotini",
     date: "Saturday 10:06",
     temperature: 27,
     description: "Few clouds",
     imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
     humidity: 36,
     wind: 1,
   };
    function showWeather(response) {
        alert(`The temperature in ${props.city} is ${response.data.main.temp}°C`);
    }
    let apiKey = "3743a596ca777c1b75d0b29a0dd4cdfd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary shadow-sm w-100"
                value="Search"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <h5 className="text-muted">Last updated: {weatherData.date}</h5>
        </div>
        <Forecast data={weatherData} />
      </div>
    );
}
