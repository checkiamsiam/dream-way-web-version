import Seo from '../../components/common/seo';
import BreadCrumbBanner from '../../components/lands/BreadCrumbBanner';
import FeaturedLands from '../../components/lands/FeaturedLands';

function Lands({ lands }) {
    return (
        <>
            <Seo pageTitle="Lands" />
            <BreadCrumbBanner />
            <FeaturedLands lands={lands} />
        </>
    );
}

export default Lands;

// server side rendering
export async function getServerSideProps() {
    const res = await fetch('https://dreamwayapi.sajidurapp.xyz/api/home/land');
    const data = await res.json();

    return {
        props: {
            lands: data.response,
        },
    };
}
