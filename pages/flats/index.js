import Seo from "../../components/common/seo";
import BreadCrumbBanner from "../../components/flats/BreadCrumbBanner";
import FeaturedFlats from "../../components/flats/FeaturedFlats";

function Flats() {
  return (
    <>
      <Seo pageTitle="Flats" />
      <BreadCrumbBanner />
      <FeaturedFlats />
    </>
  );
}

export default Flats;
