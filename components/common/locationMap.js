import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

function LocationMap() {
  const { locationPageData } = useSelector((state) => state.property);
  const position = [90.4138067, 23.8110257];
  return (
    <>
      {/* {locationPageData?.lt && locationPageData?.ln && ( */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </MapContainer>
      {/* )} */}
    </>
  );
}

export default LocationMap;
