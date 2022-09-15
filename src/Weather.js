import axios from "axios";
import React from "react";

export default function Weather(props) {
    function showWeather(response) {
        alert(`The temperature in ${props.city} is ${response.data.main.temp}°C`);
    }
    let apiKey = "3743a596ca777c1b75d0b29a0dd4cdfd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return <h2>Hello World</h2>
}
