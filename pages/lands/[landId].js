import Seo from "../../components/common/seo";
import DetailContent from "../../components/lands/Landdetails/DetailContent";
import LandDetailBannerGellary from "../../components/lands/Landdetails/LandsDetailBannerGellary";
import axiosApi from "../../features/axiosInstance";

function LandDetails({ land }) {
  return (
    <>
      <Seo pageTitle="Land Details" />
      <LandDetailBannerGellary land={land} />
      <DetailContent land={land}/>
    </>
  );
}

export default LandDetails;

export async function getServerSideProps(cxt) {
  const id = cxt.query.landId;
  const { data } = await axiosApi.get(`/api/land/${id}`);
  return {
    props: {
      land : data?.response[0],
    },
  };
}
