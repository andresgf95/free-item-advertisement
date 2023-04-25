import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function Map() {

  const [position, setPosition] = useState([42.876, -8.54])

  function Coordenadas() {
    const map = useMapEvents({
      dragend: (e) => {
        console.log(e.target.getCenter());
        console.log(e.target.getBounds());
      }
    });
  }

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "35vh", width: "35vh" }}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={position} draggable={true}>
            <Popup>
                {`dirección`}
            </Popup>
        </Marker>
        <Coordenadas/>
    </MapContainer>
  );
}

export default Map