import CallToAction from '../components/common/CallToAction';
import Seo from '../components/common/seo';
import AboutUs from '../components/Home/AboutUs';
import GetInTouch from '../components/Home/GetInTouch';
import HomeSlider from '../components/Home/HomeSlider';
import OurPartners from '../components/Home/OurPartners';
import WhyUs from '../components/Home/WhyUs';

export default function Home() {
    return (
        <>
            <Seo pageTitle="Home" />
            <HomeSlider />
            <AboutUs />
            <WhyUs />
            <GetInTouch />
            <OurPartners />
            <CallToAction />
        </>
    );
}


