"use client";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axiosApi from "../../../features/axiosInstance";

function FlatLocationMap() {
  const [flat, setFlat] = useState([]);
  const router = useRouter();
  const position = [flat?.lt, flat?.ln];
  console.log(flat);
  useEffect(() => {
    axiosApi.get(`/api/flat/${router.query.flatId}`).then((data) => setFlat(data?.response[0]));
  }, [router]);
  return (
    <>
      {flat.length > 0 && (
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
