import Seo from '../components/common/seo';
import BreadCrumbBanner from '../components/login/BreadCrumbBanner';
import Form from '../components/login/Form';

function Login() {
    return (
        <>
            <Seo pageTitle="Login" />
            <BreadCrumbBanner />
            <Form />
        </>
    );
}

export default Login;

// export async function getServerSideProps(context) {
//     const session = await getSession(context);

//

//     if (session) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         };
//     }

//     return {
//         props: {},
//     };
// }
