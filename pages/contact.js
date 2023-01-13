import CallToAction from "../components/common/CallToAction";
import Seo from "../components/common/seo";
import AddressSidebar from "../components/contact/AddressSidebar";
import BreadCrumbBanner from "../components/contact/BreadCrumbBanner";
import Form from "../components/contact/Form";

function Contact() {
  return (
    <>
      <Seo pageTitle="Contact" />
      <BreadCrumbBanner />
      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <Form />
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              <AddressSidebar />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="container-fluid p0 mt50">
          <div className="row">
            <div className="col-lg-12">
              <div className="h600" id="map-canvas">
                <div className="gmap_canvas pe-none">
                  <iframe
                    title="map"
                    className="gmap_iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8330786638167!2d90.37454902210467!3d23.753331141541377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ac20cff015%3A0xff2b5ccc3b603741!2sShukrabad%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1673583029892!5m2!1sen!2sbd"
                  ></iframe>

                  <img className="location-finder" src="assets/images/location.png" alt="location" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}

export default Contact;
