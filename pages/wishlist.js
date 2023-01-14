import { getSession } from "next-auth/react";
import Seo from "../components/common/seo";
import WishListCard from "../components/wishlist/WishListCard";
import axiosApi from "../features/axiosInstance";

function WishList({ cart }) {
  console.log(cart);
  return (
    <>
      <Seo pageTitle="Wish List" />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xl-4 mb10 mt85">
            <div className="breadcrumb_content style2 mb30-991">
              <h2 className="breadcrumb_title">Your Wishes</h2>
              <p>See Your Wish List that you added to the cart</p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="my_dashboard_review ">
              <div className="favorite_item_list">
                {cart.map((item) => (
                  <WishListCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishList;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  //https://dreamwayapi.sajidurapp.xyz/api/order/cart

  const token = session?.user?.token?.token;

  const { data } = await axiosApi.get("/api/order/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      cart: data.response,
    },
  };
}
