import Seo from "../../components/common/seo";
import DetailContent from "../../components/lands/Flatdetails/DetailContent";
import LandDetailBannerGellary from "../../components/lands/Flatdetails/LandsDetailBannerGellary";

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
