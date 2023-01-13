import Seo from "../../components/common/seo";
import DetailContent from "../../components/lands/Landdetails/DetailContent";
import LandDetailBannerGellary from "../../components/lands/Landdetails/LandsDetailBannerGellary";

function FlatDetails() {
  return (
    <>
      <Seo pageTitle="Land Details" />
      <LandDetailBannerGellary />
      <DetailContent />
    </>
  );
}

export default FlatDetails;
