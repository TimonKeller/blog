import ReactMapGl from "react-map-gl";
import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { env } from "process";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 47.44208,
    longitude: 8.36439,
    width: "100%",
    height: "100%",
    zoom: 11,
  });
  return (
    <ReactMapGl
      mapStyle="mapbox://styles/timon-keller/cl4cxznpw004114nxat8d7lu8"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {console.log("acces-token " + process.env.mapbox_key)}
    </ReactMapGl>
  );
};

export default Map;
