import Seo from "../components/common/seo";
import BreadCrumbBanner from "../components/register/BreadCrumbBanner";
import Form from "../components/register/Form";

function Login() {
  return (
    <>
      <Seo pageTitle="Register" />
      <BreadCrumbBanner />
      <Form/>
    </>
  );
}

export default Login;