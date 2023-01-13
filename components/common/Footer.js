import Link from "next/link";
import CopyrightFooter from "./footer/CopyrightFooter";
import Social from "./footer/Social";
import SubscribeForm from "./footer/SubscribeForm"

const Footer = () => {
  return (
    <>
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
              <div className="footer_about_widget">
                <h4>About Site</h4>
                <p>We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="footer_qlink_widget">
                <h4>Quick Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/">User’s Guide</Link>
                  </li>
                  <li>
                    <Link href="/">Support Center</Link>
                  </li>
                  <li>
                    <Link href="/">Press Info</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End .col */}

            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="footer_contact_widget">
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="mailto:info@findhouse.com">info@dreamway.xyz</a>
                  </li>
                  <li>
                    <a href="#">104/1, Sukrabad, Dhanmondi</a>
                  </li>
                  <li>
                    <a href="#">Dhaka,Bangladesh</a>
                  </li>
                  <li>
                    <a href="tel:+4733378901">+880 123456789</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End .col */}

            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="footer_social_widget">
                <h4>Follow us</h4>
                <ul className="mb30">
                  <Social />
                </ul>
                <h4>Subscribe</h4>
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Footer;
