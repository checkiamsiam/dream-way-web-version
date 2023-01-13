import Seo from "../../components/common/seo";
import DetailContent from "../../components/flats/Flatdetails/DetailContent";
import FlatDetailBannerGellary from "../../components/flats/Flatdetails/FlatDetailBannerGellary";

function FlatDetails() {
  return (
    <>
      <Seo pageTitle="Flat Details" />
      <FlatDetailBannerGellary />
      <DetailContent/>
    </>
  );
}

export default FlatDetails;
