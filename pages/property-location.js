import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
const LocationMap = dynamic(() => import("../components/common/locationMap"), {
  ssr: false,
});

function PropertyLocation() {
  // const { locationPageData } = useSelector((state) => state.property);
  // console.log(locationPageData);
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
              <LocationMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyLocation;
