import Image from "next/image";
import Link from "next/link";
import notificationBell from "../../public/assets/images/about/1.jpg";
import { AiFillFileText } from "react-icons/ai";
import { RiInstallLine } from "react-icons/ri";
import { convertStringToArray } from "../common/utilityFunctions";
function OwnedPropertyCard({ property }) {
  console.log(property);
  return (
    <div className="feat_property list favorite_page">
      <div className="thumb">
        <Image
          className="img-whp cover w-auto h-auto"
          src={`https://dreamwayapi.sajidurapp.xyz/${convertStringToArray(property?.property?.img_url)[0]}`}
          alt="fp1.jpg"
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
        <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Installment">
          <a href="#">
            <RiInstallLine style={{ color: "#FF5A5F" }} />
          </a>
        </li>
        <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Documents">
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
