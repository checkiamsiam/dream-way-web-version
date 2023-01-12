import Link from "next/link";
import Seo from "../components/common/seo";

function NotFound() {
  return (
    <>
      <Seo pageTitle="404 Not Found" />
      <section className="our-error bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <div className="error_page footer_apps_widget">
                <img className="img-fluid img-thumb" src="/assets/images/resource/error.png" alt="error.png" />
                <div className="erro_code">
                  <h1>Ohh! Page Not Found</h1>
                </div>
                <p>We can’t seem to find the page you’re looking for</p>

                <form className="form-inline mailchimp_form">
                  <label className="sr-only" htmlFor="inlineFormInputName">
                    Name
                  </label>
                  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName" placeholder="Search" />
                  <button type="submit" className="btn btn-primary mb-2">
                    <span className="flaticon-magnifying-glass"></span>
                  </button>
                </form>

                <Link href="/" className="btn btn_error btn-thm">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
