import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import DetailContent from "../../components/flats/Flatdetails/DetailContent";
import FlatDetailBannerGellary from "../../components/flats/Flatdetails/FlatDetailBannerGellary";
import axiosApi from "../../features/axiosInstance";

function FlatDetails({ flat, flatLocation }) {
  return (
    <>
      <Seo pageTitle="Flat Details" />
      <FlatDetailBannerGellary flat={flat} />
      <DetailContent flat={flat} flatLocation={flatLocation} />
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
      flatLocation: `<iframe
      title="map"
      className="gmap_iframe"
      src="https://maps.google.com/maps?q=${data?.response[0].lt},${data?.response[0].ln}&hl=es&z=14&amp;output=embed"
    ></iframe>`,
    },
  };
}
