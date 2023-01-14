import Image from "next/image";
import Link from "next/link";
import notificationBell from "../../public/assets/images/about/1.jpg";
import { convertStringToArray } from "../common/utilityFunctions";
function RequestedPropertyCard({ property }) {
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
      {/* End .thumb */}

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

      <span className="status_tag badge mt50">Pending</span>

      {/* view_edit_delete_list */}
    </div>
  );
}

export default RequestedPropertyCard;
