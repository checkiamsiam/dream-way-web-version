import Link from "next/link";

const PropertiesCard = () => {
  return (
    <>
      <div className="item col-lg-4 col-sm-6">
        <div className="feat_property home3">
          <div className="thumb">
            <img className="img-whp" src="/assets/images/property/fp1.jpg" alt="fp1.jpg" />
            <div className="thmb_cntnt">
              <Link href={`/listing-details-v1/`} className="fp_price">
                $1000000
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">Flat</p>
              <h4>
                <Link href={`/listing-details-v1/`}>Renovated apartment</Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                Dhanmondi , dhaka
              </p>

              <ul className="prop_details mb0">
                <li className="list-inline-item">
                  <a href="#">Beds: 4</a>
                </li>
                <li className="list-inline-item" >
                  <a href="#">Baths: 4</a>
                </li>
                <li className="list-inline-item" >
                  <a href="#">SqFt: 4</a>
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
