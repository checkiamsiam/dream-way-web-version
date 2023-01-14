import Image from "next/image";
import Link from "next/link";
import notificationBell from "../../public/assets/images/about/1.jpg";
import { ImCart } from "react-icons/im";
import { convertStringToArray } from "../common/utilityFunctions";
function WishListCard({ item }) {
  return (
    <div className="feat_property list favorite_page">
      <div className="thumb">
        <Image
          width={100}
          height={100}
          className="img-whp cover w-auto h-auto"
          src={notificationBell}
          alt="fp1.jpg"
        />
      </div>
      {/* End .thumb */}

      <div className="details">
        <div className="tc_content">
          <h4>
            {" "}
            <Link href="">{item?.title}</Link>
          </h4>
          <p>
            <span className="flaticon-placeholder"></span> {item?.address}
          </p>
          <a className="fp_price text-thm" href="#">
            $ {item?.price || item.regular_price} BDT
          </a>
        </div>
      </div>
      {/* End details */}

      <ul className="view_edit_delete_list mb0 mt35">
        <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Remove">
          <a href="#">
            <span className="flaticon-garbage"></span>
          </a>
        </li>
        <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Place Order">
          <a href="#">
            <ImCart style={{ color: "#FF5A5F" }} />
          </a>
        </li>
      </ul>
      {/* view_edit_delete_list */}
    </div>
  );
}

export default WishListCard;
