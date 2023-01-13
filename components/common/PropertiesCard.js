import Image from "next/image";
import Link from "next/link";
import { convertStringToArray } from "./utilityFunctions";

const PropertiesCard = ({ property, type }) => {
  let detailRoute;
  switch (type) {
    case "Flat":
      detailRoute = `flats/${property.flatid}`;
      break;
    case "Land":
      detailRoute = `lands/${property.id}`;
      break;
    default:
      break;
  }

  return (
    <>
      <div className="item col-lg-4 col-sm-6">
        <div className="feat_property home3">
          <div className="thumb">
            <Image
              className="img-whp"
              width={100}
              height={100}
              src={`https://dreamwayapi.sajidurapp.xyz/${convertStringToArray(property.img_url)[0]}`}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <Link href={detailRoute} className="fp_price">
                $ {property?.price || property.regular_price}
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{type}</p>
              <h4>
                <Link href={detailRoute}>{property?.title}</Link>
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
