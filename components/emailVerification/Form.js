import { useRef } from "react";

const Form = () => {
  const ref = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      otp: ref.current.name?.value,
      email: ref.current.address?.value,
    };
    await register(data);
  };

  return (
    <section className="our-log bgc-fa mt85">
      <div className="container">
        <div className="row  ">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <div className="login_form  inner_page">
              <form ref={ref} onSubmit={handleSubmit}>
                <div className="heading text-center">
                  <h3>Dream Way</h3>
                  <p className="text-center">OTP send to this email : demo@gmail.com</p>
                </div>

                <div className="form-group input-group ">
                  <input type="number" name="otp" className="form-control" required placeholder="OTP" />
                </div>
                <input type="submit" value="Verify" className="btn btn-log w-100 btn-thm" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
