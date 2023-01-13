import Social from "../common/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Contact Us</h4>
      <p>Also Can Contact Via This Credentials.</p>
      <div className="content_list">
        <h5>Address</h5>
        <p>
          104/1, Sukrabad, Dhanmondi <br />
          Dhaka
        </p>
      </div>
      <div className="content_list">
        <h5>Phone</h5>
        <p>+880123456789</p>
      </div>
      <div className="content_list">
        <h5>Mail</h5>
        <p>info@dreamway.xyz</p>
      </div>
      <div className="content_list">
        <h5>Skype</h5>
        <p>findhouse.com</p>
      </div>
      <h5>Follow Us</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
