import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAddToCartMutation } from "../../../features/property/propertyApi";
import PropertyDescriptions from "../../common/PropertyDescriptions";
import PropertyDetails from "../../common/PropertyDetails";

function DetailContent() {
  const router = useRouter();
  const [addToCart, { isSuccess, isError, data }] = useAddToCartMutation();
  const queryBody = {
    propertyID: router.query.flatId || router.query.landId,
    propertyType: (router.query.flatId && 2) || (router.query.landId && 1),
  };

  const handleAddToCart = async () => {
    await addToCart(queryBody);
  };

  useEffect(() => {
    isSuccess && router.push("/wishlist");
  }, [isSuccess, isError, data, router]);
  return (
    <div className="container mt50 mb50">
      <div className="listing_single_description ">
        <div className="lsd_list">
          <div className="mb0 d-flex gap-3">
            <button onClick={handleAddToCart} className="btn btn-lg btn-yellow rounded-2">
              Add To Cart
            </button>
            <button className="btn btn-lg btn-green rounded-2">Place Order</button>
          </div>
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
