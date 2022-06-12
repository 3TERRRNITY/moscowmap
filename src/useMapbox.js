import { useLayoutEffect } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

export default function useMapbox(container, center, zoom) {

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: container || "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: center || [37.61192, 55.76199],
      zoom: zoom || 10
    });
  }, []);
}
