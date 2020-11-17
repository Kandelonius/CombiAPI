// App to hold the opening information
import React from "react";
import "./App.css";
import Geolocation from "./components/Geolocation";
import Brewery from "./components/Brewery";
// import MTG from "./components/MTG";

const App = () => {
  return (

    <div className="App">
      hey
      <Brewery />
      {/* <Geolocation /> */}
      {/* <MTG /> */}
    </div>
  );
}

export default App;