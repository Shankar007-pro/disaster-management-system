import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const [impactZones, setImpactZones] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/impact_zones")
      .then((res) => res.json())
      .then((data) => setImpactZones(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer center={[12.97, 77.59]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {impactZones && <GeoJSON data={impactZones} />}
      </MapContainer>
    </div>
  );
}

export default App;
