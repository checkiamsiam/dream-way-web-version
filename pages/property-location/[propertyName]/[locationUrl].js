import { useRouter } from "next/router";
import Seo from "../../../components/common/seo";

function PropertyLocationMap() {
  const router = useRouter();
  const { propertyName, locationUrl } = router.query;
  const iframeUrl = `https://maps.google.com/maps?q=${locationUrl}&hl=es&z=14&amp;output=embed`;
  return (
    <>
      <Seo pageTitle="Property Location" />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xl-4 mb10 mt85">
            <div className="breadcrumb_content style2 mb30-991">
              <h2 className="breadcrumb_title">{propertyName}</h2>
              <p>See The Actual Location of this property in map</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="h600" id="map-canvas">
              <div className="gmap_canvas pe-none">
                <iframe title="map" className="gmap_iframe" src={iframeUrl}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyLocationMap;
