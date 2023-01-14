import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ImCart } from "react-icons/im";
import { toast } from "react-toastify";
import { usePlaceOrderMutation, useRemoveFromCartMutation } from "../../features/property/propertyApi";
import { convertStringToArray } from "../common/utilityFunctions";

function WishListCard({ item }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [removeFromCart] = useRemoveFromCartMutation();
  const [placeOrder, { isSuccess, isError, data }] = usePlaceOrderMutation();

  const handlePlaceOrder = async () => {
    const queryBody = {
      propertyID: item?.p_id,
      propertyType: item?.p_type,
      name: session?.user?.token?.name,
      phone: session?.user?.token?.phone,
      email: session?.user?.token?.email,
      comment: "",
    };
    await placeOrder({ body: queryBody, token: session?.user?.token?.token });
    toast.warning(data?.message);
  };

  useEffect(() => {
    status === "authenticated" || router.push("/login");
  }, [status, router]);
  useEffect(() => {
    isSuccess && router.push("/my-property");
  }, [isSuccess, isError, data, router]);

  console.log(item);

  return (
    <div className="feat_property list favorite_page">
      <div className="thumb">
        <Image
          className="img-whp cover w-auto h-auto"
          src={`https://dreamwayapi.sajidurapp.xyz/${convertStringToArray(item?.property?.img_url)[0]}`}
          alt="fp1.jpg"
          width={200}
          height={200}
        />
      </div>
      {/* End .thumb */}

      <div className="details">
        <div className="tc_content">
          <h4>
            {" "}
            <Link href="">{item?.property?.title}</Link>
          </h4>
          <p>
            <span className="flaticon-placeholder"></span> {item?.property?.address}
          </p>
          <a className="fp_price text-thm" href="#">
            {item?.property?.price || item?.property?.regular_price} BDT
          </a>
        </div>
      </div>
      {/* End details */}

      <ul className="view_edit_delete_list mb0 mt35">
        <li
          className="list-inline-item"
          data-toggle="tooltip"
          data-placement="top"
          title="Remove"
          onClick={async () => {
            await removeFromCart({ id: item.id, token: session?.user?.token?.token });
            router.reload();
          }}
        >
          <a href="#">
            <span className="flaticon-garbage"></span>
          </a>
        </li>
        <li onClick={handlePlaceOrder} className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Place Order">
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
