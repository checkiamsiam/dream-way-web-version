import axios from "axios";
import Seo from "../../components/common/seo";
import BreadCrumbBanner from "../../components/flats/BreadCrumbBanner";
import FeaturedFlats from "../../components/flats/FeaturedFlats";
import axiosApi from "../../features/axiosInstance";

function Flats({ lands }) {
  console.log(lands);
  return (
    <>
      <Seo pageTitle="Flats" />
      <BreadCrumbBanner />
      <FeaturedFlats lands={lands.response} />
    </>
  );
}

export default Flats;

export async function getServerSideProps() {
  const {data} = await axiosApi.get("/api/home/flat");

  return {
    props: {
      lands: data,
    },
  };
}
