import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


function App() {
  const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken =
  "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";
  
  useMapbox("map", [37.61192, 55.76199], 10);

  return (
    <div className = "font-serif text-blue-700" >
      <button className = "m-3 p-3 border rounded-md text-white text-base bg-cyan-500 cursor-pointer ease-out duration-300 shadow-md hover:bg-cyan-700 " id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div className = "m-3 hover:text-blue-900" id="map"></div>
    </div>
  );
}

render(<App />, document.querySelector("#root"));
