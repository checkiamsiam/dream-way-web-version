import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRegisterVerificationMutation } from "../../features/user/userApi";

const Form = () => {
  const [verify, { isSuccess, isError, data }] = useRegisterVerificationMutation();
  const { emailForVerification } = useSelector((state) => state.userData);
  const router = useRouter();
  const ref = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: emailForVerification,
      otp: ref.current.otp?.value,
    };
    await verify(data);
  };

  useEffect(() => {
    isSuccess &&
      toast.success("user registered successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    isSuccess && router.push("/login");
  }, [isSuccess, isError, data, router]);

  console.log(data);

  return (
    <section className="our-log bgc-fa mt85">
      <div className="container">
        <div className="row  ">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <div className="login_form  inner_page">
              <form ref={ref} onSubmit={handleSubmit}>
                <div className="heading text-center">
                  <h3>Dream Way</h3>
                  <p className="text-center">OTP send to this email : {emailForVerification}</p>
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
