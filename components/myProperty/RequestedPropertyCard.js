import Image from "next/image";
import Link from "next/link";
import notificationBell from "../../public/assets/images/about/1.jpg";
function RequestedPropertyCard() {
  return (
    <div className="feat_property list favorite_page">
      <div className="thumb">
        <Image className="img-whp cover w-auto h-auto" src={notificationBell} alt="fp1.jpg" />
      </div>
      {/* End .thumb */}

      <div className="details">
        <div className="tc_content">
          <h4>
            {" "}
            <Link href="">Dhanmondi Propertry</Link>
          </h4>
          <p>
            <span className="flaticon-placeholder"></span> 1421 San Pedro St, Los Angeles, CA 900015
          </p>
          <a className="fp_price text-thm" href="#">
            100000 BDT
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
