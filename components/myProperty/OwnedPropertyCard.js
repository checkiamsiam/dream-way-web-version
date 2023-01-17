import Image from "next/image";
import Link from "next/link";
import { AiFillFileText } from "react-icons/ai";
import { RiInstallLine } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setInstallmentProperty, setLocationPageData } from "../../features/property/propertySlice";
import { convertStringToArray } from "../common/utilityFunctions";
import { useRouter } from "next/router";
function OwnedPropertyCard({ property, setVisibleModal, setVisibleDocuments }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleOpenDocumentsModal = () => {
    dispatch(setInstallmentProperty(property));
    setVisibleDocuments(true);
  };
  const handleOpenInstallmentModal = () => {
    dispatch(setInstallmentProperty(property));
    setVisibleModal(true);
  };
  const handleOpenLocationMap = () => {
    dispatch(
      setLocationPageData({
        propertyName: property?.property?.title,
        iframeLocation: `<iframe
        title="map"
        className="gmap_iframe"
        src="https://maps.google.com/maps?q=${property?.property?.lt},${property?.property?.ln}&hl=es&z=14&amp;output=embed"
      ></iframe>`,
      })
    );
    router.push("/property-location");
  };
  return (
    <div className="feat_property list favorite_page">
      <div className="thumb">
        <Image
          className="img-whp cover w-auto h-auto"
          src={`https://dreamwayapi.sajidurapp.xyz/${convertStringToArray(property?.property?.img_url)[0]}`}
          alt="fp1.jpg"
          width={360}
          height={240}
        />
      </div>

      <div className="details">
        <div className="tc_content">
          <h4>
            {" "}
            <Link href="">{property?.property?.title}</Link>
          </h4>
          <p>
            <span className="flaticon-placeholder"></span> {property?.property?.address}
          </p>
          <a className="fp_price text-thm" href="#">
            {property?.property?.price || property?.property?.regular_price} BDT
          </a>
        </div>
      </div>
      {/* End details */}

      <ul className="view_edit_delete_list mb0 mt35">
        <li onClick={handleOpenLocationMap} className="list-inline-item" data-toggle="tooltip" data-placement="top" title="See On Map">
          <a href="#">
            <FaMapMarkedAlt style={{ color: "#FF5A5F" }} />
          </a>
        </li>
        <li onClick={handleOpenInstallmentModal} className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Installment">
          <a href="#">
            <RiInstallLine style={{ color: "#FF5A5F" }} />
          </a>
        </li>
        <li onClick={handleOpenDocumentsModal} className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Documents">
          <a href="#">
            <AiFillFileText style={{ color: "#FF5A5F" }} />
          </a>
        </li>
      </ul>
      {/* view_edit_delete_list */}
    </div>
  );
}

export default OwnedPropertyCard;
