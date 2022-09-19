import React from "react";

import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix">
          <img src={props.data.icon} alt={props.data.description} />
          <span className="temperature">{props.data.temperature}</span>
          <span className="units">
            <a href="/">C°</a> | <a href="/"> F°</a>
          </span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>{props.data.description}</li>
          <li>Humidity: {props.data.humidity}% </li>
          <li>Wind: {props.data.wind} km/h</li>
          
        </ul>
      </div>
    </div>
  );
}
