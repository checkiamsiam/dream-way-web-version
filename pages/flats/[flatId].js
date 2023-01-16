import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import DetailContent from "../../components/flats/Flatdetails/DetailContent";
import FlatDetailBannerGellary from "../../components/flats/Flatdetails/FlatDetailBannerGellary";
import axiosApi from "../../features/axiosInstance";

const FlatLocationMap = dynamic(() => import("../../components/flats/Flatdetails/flatLocationMap"), {
  ssr: false,
});

function FlatDetails({ flat }) {
  return (
    <>
      <Seo pageTitle="Flat Details" />
      <FlatDetailBannerGellary flat={flat} />
      <DetailContent flat={flat} />
      <FlatLocationMap flat={flat} />
    </>
  );
}

export default FlatDetails;

export async function getServerSideProps(cxt) {
  const id = cxt.query.flatId;
  const { data } = await axiosApi.get(`/api/flat/${id}`);
  return {
    props: {
      flat: data?.response[0],
    },
  };
}
