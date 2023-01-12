
function GetInTouch() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-xl-4">
          <div className="contact_localtion">
            <h4>Dream Way</h4>
            <p>A Real Estate Company in Bangladesh.</p>
            <div className="content_list">
              <h5>Address</h5>
              <p>
                104/1, Sukrabad, Dhanmondi <br />
                Dhaka , Bangladesh
              </p>
            </div>
            <div className="content_list">
              <h5>Phone</h5>
              <p>+880 123456789</p>
            </div>
            <div className="content_list">
              <h5>Mail</h5>
              <p>info@dreamway.xyz</p>
            </div>
            <div className="content_list">
              <div>
                <iframe
                  height={200}
                  title="map"
                  className="gmap_iframe"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7299.699911589504!2d90.429606!3d23.823934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18476397bcc6d65d!2sDreamway%20Holdings%20Ltd.!5e0!3m2!1sen!2sbd!4v1673539548196!5m2!1sen!2sbd"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-xl-8">
          <div className="form_grid">
            <h4 className="mb5">Get Into Touch</h4>
            <p>Ask question and learn more about our solution and get started in seconds.</p>
            <form className="contact_form" action="#">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input id="form_name" name="form_name" className="form-control" required="required" type="text" placeholder="Name" />
                  </div>
                </div>
                {/* End .col */}

                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      id="form_email"
                      name="form_email"
                      className="form-control required email"
                      required="required"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                {/* End .col */}

                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      id="form_phone"
                      name="form_phone"
                      className="form-control required phone"
                      required="required"
                      type="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                {/* End .col */}

                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="form_message"
                      className="form-control required"
                      rows="8"
                      required="required"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  {/* End .col */}

                  <div className="form-group mb0">
                    <button type="submit" className="btn btn-lg btn-thm">
                      Send Message
                    </button>
                  </div>
                  {/* End button submit */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}

export default GetInTouch;
