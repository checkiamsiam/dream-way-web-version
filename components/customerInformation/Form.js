import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { usePlaceOrderMutation } from "../../features/property/propertyApi";

const Form = () => {
  const router = useRouter();
  const { target } = useSelector((state) => state.property);
  const ref = useRef();
  const [placeOrder, { isSuccess, isError, data }] = usePlaceOrderMutation();
  const { data: session, status } = useSession();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryBody = {
      propertyID: target.propertyID,
      propertyType: target.propertyType,
      name: ref.current.name?.value,
      phone: ref.current.phone?.value,
      email: ref.current.email?.value,
      comment: ref.current.comment?.value,
    };
    await placeOrder({ body: queryBody, token: session?.user?.token?.token });
  };
  useEffect(() => {
    status === "authenticated" || router.push("/login");
  }, [status, router]);
  useEffect(() => {
    isSuccess && router.push("/my-property");
  }, [isSuccess, isError, data, router]);
  return (
    <section className="our-log bgc-fa mt85">
      <div className="container">
        <div className="row  ">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <div className="login_form  inner_page">
              <form ref={ref} onSubmit={handleSubmit}>
                <div className="heading text-center">
                  <h3>Customer Information</h3>
                  <p className="text-center">Fill up the form for place your order.</p>
                </div>

                <div className="form-group input-group ">
                  <input
                    type="text"
                    name="name"
                    defaultValue={session?.user?.token?.name}
                    className="form-control"
                    required
                    placeholder="Your Name"
                  />
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="flaticon-user"></i>
                    </div>
                  </div>
                </div>
                <div className="form-group input-group ">
                  <input
                    type="number"
                    name="phone"
                    defaultValue={session?.user?.token?.phone}
                    className="form-control"
                    required
                    placeholder="Your Phone"
                  />
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="flaticon-telephone"></i>
                    </div>
                  </div>
                </div>
                {/* End .form-group */}

                <div className="form-group input-group  ">
                  <input type="email" name="email" defaultValue={session?.user?.token?.email} className="form-control" required placeholder="Email" />
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-envelope-o"></i>
                    </div>
                  </div>
                </div>
                <div className="form-group h100 mb-4">
                  <textarea
                    id="form_message"
                    name="comment"
                    className="form-control h-100 required"
                    rows={5}
                    required="required"
                    placeholder="Comments"
                  ></textarea>
                </div>
                <input type="submit" value="Continue" className="btn btn-log w-100 btn-thm" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
