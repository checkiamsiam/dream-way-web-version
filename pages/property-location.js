"use client";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import Seo from "../components/common/seo";

function PropertyLocation() {
  const { locationPageData } = useSelector((state) => state.property);
  return (
    <>
      <Seo pageTitle="Property Location" />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xl-4 mb10 mt85">
            <div className="breadcrumb_content style2 mb30-991">
              <h2 className="breadcrumb_title">{locationPageData?.propertyName}</h2>
              <p>See The Actual Location of this property in map</p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="h600" id="map-canvas">
              <MapContainer center={[locationPageData?.lt, locationPageData?.ln]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[locationPageData?.lt, locationPageData?.ln]}></Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyLocation;
