import CallToAction from "../components/common/CallToAction";
import Seo from "../components/common/seo";
import AboutUs from "../components/Home/AboutUs";
import GetInTouch from "../components/Home/GetInTouch";
import HomeSlider from "../components/Home/HomeSlider";
import OurPartners from "../components/Home/OurPartners";
import WhyUs from "../components/Home/WhyUs";
import axiosApi from "../features/axiosInstance";

export default function Home({ data }) {
  return (
    <>
      <Seo pageTitle="Home" />
      <HomeSlider sliderData={data.sliders} />
      <AboutUs />
      <WhyUs />
      <GetInTouch />
      <OurPartners />
      <CallToAction />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axiosApi.get("/api/home/home");

  return {
    props: {
      data: data,
    },
  };
}
