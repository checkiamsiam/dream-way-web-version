import Seo from "../../components/common/seo";
import BreadCrumbBanner from "../../components/flats/BreadCrumbBanner";
import FeaturedFlats from "../../components/flats/FeaturedFlats";
import axiosApi from "../../features/axiosInstance";

function Flats({ flats }) {
  return (
    <>
      <Seo pageTitle="Flats" />
      <BreadCrumbBanner />
      <FeaturedFlats flats={flats.response} />
    </>
  );
}

export default Flats;

export async function getServerSideProps() {
  const {data} = await axiosApi.get("/api/home/flat");

  return {
    props: {
      flats: data,
    },
  };
}
