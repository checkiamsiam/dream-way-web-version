import { getSession } from 'next-auth/react';
import Seo from '../components/common/seo';
import BreadCrumbBanner from '../components/register/BreadCrumbBanner';
import Form from '../components/register/Form';

function Register() {
    return (
        <>
            <Seo pageTitle="Register" />
            <BreadCrumbBanner />
            <Form />
        </>
    );
}

export default Register;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    console.log({ session });

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}
