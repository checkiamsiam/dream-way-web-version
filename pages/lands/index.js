import Seo from "../../components/common/seo";
import BreadCrumbBanner from "../../components/lands/BreadCrumbBanner";
import FeaturedLands from "../../components/lands/FeaturedLands";

function Lands() {
  return (
    <>
      <Seo pageTitle="Lands" />
      <BreadCrumbBanner />
      <FeaturedLands />
    </>
  );
}

export default Lands;
