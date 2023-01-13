import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useRegisterMutation } from '../../features/user/userApi';

const Form = () => {
    const router = useRouter();
    const [register, { isSuccess, isError, data }] = useRegisterMutation();

    const ref = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: ref.current.name?.value,
            address: ref.current.address?.value,
            phone: ref.current.phone?.value,
            email: ref.current.email?.value,
            password: ref.current.password?.value,
            gender: ref.current.gender?.value,
            dob: ref.current.dob?.value,
        };
        await register(data);
    };

    useEffect(() => {
        isSuccess && router.push('/email-verification');
    }, [isSuccess, isError, data, router]);

    return (
        <section className="our-log bgc-fa">
            <div className="container">
                <div className="row  ">
                    <div className="col-sm-12 col-lg-6 offset-lg-3">
                        <div className="login_form  inner_page">
                            <form ref={ref} onSubmit={handleSubmit}>
                                <div className="heading text-center">
                                    <h3>Register to your account</h3>
                                    <p className="text-center">
                                        Already have an account?{' '}
                                        <Link
                                            href="/login"
                                            className="text-thm"
                                        >
                                            Login
                                        </Link>
                                    </p>
                                </div>

                                <div className="form-group input-group ">
                                    <input
                                        type="text"
                                        name="name"
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
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        required
                                        placeholder="Your Adress"
                                    />
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="flaticon-maps-and-flags"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group input-group ">
                                    <input
                                        type="number"
                                        name="phone"
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
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        required
                                        placeholder="Email"
                                    />
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-envelope-o"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group input-group  ">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        required
                                        placeholder="Password"
                                    />
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="flaticon-password"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* End .form-group */}

                                {/* End .form-group */}
                                <div className="d-flex gap-3 ">
                                    <span>Gender:</span>
                                    <div className="form-group form-check custom-checkbox mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            id="terms"
                                        />
                                        <span>Male</span>
                                    </div>
                                    <div className="form-group form-check custom-checkbox mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            id="terms"
                                        />
                                        <span>Female</span>
                                    </div>
                                </div>

                                <div className="mb-2">Date of Birth :</div>
                                <div className="form-group input-group  ">
                                    <input
                                        type="date"
                                        name="dob"
                                        className="form-control"
                                        required
                                        placeholder="Date of Birth"
                                    />
                                </div>
                                {/* End .form-group */}

                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-log w-100 btn-thm"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
