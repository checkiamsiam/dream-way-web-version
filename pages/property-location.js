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
              <div className="gmap_canvas pe-none">
                <iframe
                  title="map"
                  className="gmap_iframe"
                  src={`https://maps.google.com/maps?q=${locationPageData?.lt},${locationPageData?.ln}&hl=es&z=14&amp;output=embed`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyLocation;
