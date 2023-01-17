import Seo from "../../components/common/seo";
import DetailContent from "../../components/lands/Landdetails/DetailContent";
import LandDetailBannerGellary from "../../components/lands/Landdetails/LandsDetailBannerGellary";
import axiosApi from "../../features/axiosInstance";

function LandDetails({ land, landLocation }) {
  return (
    <>
      <Seo pageTitle="Land Details" />
      <LandDetailBannerGellary land={land} />
      <DetailContent land={land} landLocation={landLocation} />
    </>
  );
}

export default LandDetails;

export async function getServerSideProps(cxt) {
  const id = cxt.query.landId;
  const { data } = await axiosApi.get(`/api/land/${id}`);
  return {
    props: {
      land: data?.response[0],
      landLocation: `<iframe
      title="map"
      className="gmap_iframe"
      src="https://maps.google.com/maps?q=${data?.response[0].lt},${data?.response[0].ln}&hl=es&z=14&amp;output=embed"
    ></iframe>`,
    },
  };
}
