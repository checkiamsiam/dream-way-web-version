import Link from "next/link";
import PropertyDescriptions from "../../common/PropertyDescriptions";
import PropertyDetails from "../../common/PropertyDetails";

function DetailContent() {
  return (
    <div className="container mt50 mb50">
      <div className="listing_single_description ">
        <div className="lsd_list">
          <ul className="mb0">
            <li className="list-inline-item">
              <Link href="/flats">Flat</Link>
            </li>
          </ul>
        </div>
        <h4 className="mb30">Description</h4>
        <PropertyDescriptions />
      </div>
      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Property Details</h4>
          </div>
          <PropertyDetails />
        </div>
      </div>
    </div>
  );
}

export default DetailContent;
