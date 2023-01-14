import Seo from "../../components/common/seo";
import BreadCrumbBanner from "../../components/lands/BreadCrumbBanner";
import FeaturedLands from "../../components/lands/FeaturedLands";
import axiosApi from "../../features/axiosInstance";

function Lands({ lands }) {
  console.log(lands);
  return (
    <>
      <Seo pageTitle="Lands" />
      <BreadCrumbBanner />
      <FeaturedLands lands={lands.response} />
    </>
  );
}

export default Lands;

// server side rendering
export async function getServerSideProps() {
  const { data } = await axiosApi.get("/api/home/land");

  return {
    props: {
      lands: data,
    },
  };
}
