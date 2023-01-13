import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import MobileMenu from '../components/common/header/MobileMenu';
import ScrollToTop from '../components/common/ScrollTop';
import Seo from '../components/common/seo';
import { store } from '../features/store';
import '../styles/index.scss';

if (typeof window !== 'undefined') {
    require('bootstrap/dist/js/bootstrap');
}

function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <SessionProvider session={session}>
                <Seo
                    font={
                        'https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap'
                    }
                />
                <Provider store={store}>
                    <Header />
                    <MobileMenu />
                    <Component {...pageProps} />
                    <Footer />
                    <ToastContainer />
                </Provider>
                <ScrollToTop />
            </SessionProvider>
        </>
    );
}

export default App;
