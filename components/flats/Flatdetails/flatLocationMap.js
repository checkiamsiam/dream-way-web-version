import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

function FlatLocationMap({ flat }) {
  const position = [flat?.lt, flat?.ln];
  console.log(flat);
  return (
    <>
      {flat?.lt && flat?.ln && (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{flat?.address}</Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
}

export default FlatLocationMap;
