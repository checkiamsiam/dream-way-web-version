import Seo from "../components/common/seo";
import BreadCrumbBanner from "../components/login/BreadCrumbBanner";
import Form from "../components/login/Form";

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
