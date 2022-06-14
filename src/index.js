import React, { useState, useRef } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


function App() {
  const [random, setRandom] = useState(Math.random());
  const containerRef = useRef();
  
  useMapbox(containerRef)
  

  return (
    <div className = "font-serif text-blue-700 mx-auto" >
      <button className = "m-3 p-3 border rounded-md text-white text-base bg-cyan-500 cursor-pointer ease-out duration-300 shadow-md hover:bg-cyan-700" id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div ref = {containerRef} className = "m-3 hover:text-blue-900 mx-auto"></div>
    </div>
  );
}

render(<App />, document.querySelector("#root"));
