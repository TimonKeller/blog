import React, { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

const Map = ({ longitude, latitude }) => {
  mapboxgl.accessToken = process.env.mapbox_key;

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    if ((longitude, latitude)) {
      map.current = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/timon-keller/cl4cxznpw004114nxat8d7lu8",
        center: [longitude, latitude],
        zoom: 12,
      });
      map.current.scrollZoom.disable();

      // make a marker for each feature and add to the map
      const marker = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map.current);
    }
  }, [longitude, latitude]);
  return <div ref={mapContainer} className="map"></div>;
};

export async function getStaticProps() {
  const newPost = (await getNewestPost()) || [];

  return {
    props: { newPost: newPost },
  };
}

export default Map;
