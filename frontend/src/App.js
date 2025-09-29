import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  const [geojson, setGeojson] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/impact_zones')
      .then(res => res.json())
      .then(data => setGeojson(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={[12.97, 77.59]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {geojson && <GeoJSON data={geojson} />}
      </MapContainer>
    </div>
  );
}

export default App;
