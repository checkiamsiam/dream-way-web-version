import Image from "next/image";
import Link from "next/link";

const PropertiesCard = ({ property, type }) => {
  return (
    <>
      <div className="item col-lg-4 col-sm-6">
        <div className="feat_property home3">
          <div className="thumb">
            <Image className="img-whp" width={100} height={100} src="/assets/images/property/fp1.jpg" alt="fp1.jpg" />
            <div className="thmb_cntnt">
              <Link href={`/flats/${"randsdfdsf"}`} className="fp_price">
                $ {property?.price}
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{type}</p>
              <h4>
                <Link href={`/flats/${"randsdfdsf"}`}>{property?.title}</Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {property?.address}
              </p>

              <ul className="prop_details mb0">
                <li className="list-inline-item">
                  <Link href="">SqFt: {property?.area}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesCard;
