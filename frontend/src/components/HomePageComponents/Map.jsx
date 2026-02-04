import { useLocation } from "../../hooks/LocationContext";
import "./styles.css";

import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";

function Map() {
  const {located, setlocated, setMapLocation, country} = useLocation();
  const lat = located[0] || 12;
  const lng = located[1] || 42;
  const name = country.name?.common;


  return (
    <MapContainer
      center={[lat, lng]}
      zoom={6}
      scrollWheelZoom={true}
      className="map"
    >
      <ChangeView center={[lat, lng]} />

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      <MapClick
        onClick={({ lat, lng }) => {
        setlocated([lat, lng]);
        setMapLocation([lat, lng])
        }}
      />


      <Marker position={[lat, lng]}>
        <Popup>{name}</Popup>
      </Marker>

    </MapContainer>
  );
}

export default Map;



function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}




function MapClick({ onClick }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onClick({ lat, lng });
    },
  });
  return null;
}