import "../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../features/store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
import Header from "../components/common/Header";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function App({ Component, pageProps }) {
  return (
    <>
      <Seo font={"https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"} />
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>

      <ScrollToTop />
    </>
  );
}

export default App;
