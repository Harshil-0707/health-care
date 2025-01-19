import { useEffect, useRef } from "react";
import leaflet from "leaflet";

export default function Map() {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map("map").setView([51.505, -0.09], 13);
    leaflet
      .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      })
      .addTo(mapRef.current);
  }, []);

  return (
    <div
      id="map"
      ref={mapRef}
      className="overflow-hidden h-[20rem] w-full"
    ></div>
  );
}
