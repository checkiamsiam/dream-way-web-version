const PropertyDetails = ({ propertyDetail }) => {
    return (
        <>
            <div className="col-md-6 col-lg-6 col-xl-4">
                <ul className="list-inline-item">
                    <li>
                        <p>
                            Property ID :{' '}
                            <span>
                                {propertyDetail?.id || propertyDetail?.flatid}
                            </span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Price :{' '}
                            <span>
                                ${' '}
                                {propertyDetail?.price ||
                                    propertyDetail?.regular_price}
                            </span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Property Size : <span>1560 Sq Ft</span>
                        </p>
                    </li>
                </ul>
            </div>
            {/* End .col */}

            {/* <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Bedrooms : <span>8</span>
            </p>
          </li>
          <li>
            <p>
              Bathrooms : <span>4</span>
            </p>
          </li>
        </ul>
      </div> */}
            {/* End .col */}
            {/* 
            <div className="col-md-6 col-lg-6 col-xl-4">
                <ul className="list-inline-item">
                    <li>
                        <p>
                            Property Type : <span>Apartment</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Property Status : <span>For Sale</span>
                        </p>
                    </li>
                </ul>
            </div> */}
        </>
    );
};

export default PropertyDetails;
