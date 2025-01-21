import l from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

delete L.Icon.Default.prototype._getIconUrl;

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Map() {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef._leaflet_id) return;

    mapRef.current = l
      .map("map", {
        attributionControl: false,
      })
      .setView([23.0225, 72.5714], 13);

    l.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(mapRef.current);

    //add marker on click on the map
    let marker = l.marker([23.0225, 72.5714]).addTo(mapRef.current);

    mapRef.current.on("click", (e) => {
      const { lat, lng } = e.latlng;
      if (marker) mapRef.current.removeLayer(marker);

      marker = l.marker([lat, lng]).addTo(mapRef.current);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div
      id="map"
      ref={mapRef}
      className="overflow-hidden h-[25rem] w-full"
    ></div>
  );
}
