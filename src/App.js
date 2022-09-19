import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <small>
        <a href="https://github.com/Nataliiv/weather-react" target="_blank">
          Open-source code
        </a>
        , by Nataliia Ivanchak
      </small>
    </div>
  );
}

export default App;
