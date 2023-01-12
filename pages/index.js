import Seo from "../components/common/seo";
import CallToAction from "../components/Home/CallToAction";
import HomeSlider from "../components/Home/HomeSlider";
import OurPartners from "../components/Home/OurPartners";
import WhyUs from "../components/Home/WhyUs";

export default function Home() {
  return (
    <>
      <Seo pageTitle="Home" />
      <HomeSlider />
      <WhyUs />
      <OurPartners />
      <CallToAction />
    </>
  );
}
