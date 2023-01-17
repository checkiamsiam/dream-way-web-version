import parse from "html-react-parser";
import { useSession } from "next-auth/react";
// import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAddToCartMutation } from "../../../features/property/propertyApi";
import { setPropertyTarget } from "../../../features/property/propertySlice";
import PropertyDetails from "../../common/PropertyDetails";
// const FlatLocationMap = dynamic(() => import("./flatLocationMap"), {
//     ssr: false,
//   });

function DetailContent({ flat, flatLocation }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const [addToCart, { isSuccess, isError, data }] = useAddToCartMutation();

  const queryBody = {
    propertyID: router.query.flatId || router.query.landId,
    propertyType: (router.query.flatId && 2) || (router.query.landId && 1),
  };

  const handlePlaceOrder = () => {
    dispatch(setPropertyTarget(queryBody));
    router.push("/customer-information");
  };

  useEffect(() => {
    isSuccess && router.push("/wishlist");
  }, [isSuccess, isError, data, router]);

  return (
    <div className="container mt50 mb50">
      <div className="listing_single_description ">
        <div className="lsd_list">
          <div className="mb0 d-flex gap-3">
            <button
              onClick={() =>
                addToCart({
                  body: queryBody,
                  token: session?.user?.token?.token,
                })
              }
              className="btn btn-lg btn-yellow rounded-2"
            >
              Add To Cart
            </button>
            <button onClick={handlePlaceOrder} className="btn btn-lg btn-green rounded-2">
              Place Order
            </button>
          </div>
        </div>
        {flat?.details && (
          <>
            {" "}
            <h4 className="mb30">Description</h4>
            {parse(flat?.details)}{" "}
          </>
        )}
      </div>
      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Property Details</h4>
          </div>
          <PropertyDetails propertyDetail={flat} />
          {/* <FlatLocationMap /> */}
          <div className="gmap_canvas pe-none">{parse(flatLocation)}</div>
        </div>
      </div>
    </div>
  );
}

export default DetailContent;
