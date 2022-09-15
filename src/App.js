import React from "react";
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather React
        </h1>
        <Weather city="Lisbon" />
      </header>
    </div>
  );
}

export default App;
