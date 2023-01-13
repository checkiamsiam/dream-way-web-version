import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = () => {
    const router = useRouter();
    const notify = () => toast.success('Login Success');

    const [loading, setLoading] = useState(false);

    const handelSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const res = await signIn('credentials', {
            redirect: false,
            email: event.target.email.value,
            password: event.target.password.value,
        });

        setLoading(false);

        if (res.ok) {
            notify();
            router.push('/');
        }

        if (res.status === 401) {
            toast.error(res.error, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    return (
        <section className="our-log bgc-fa">
            <div className="container">
                <div className="row  ">
                    <div className="col-sm-12 col-lg-6 offset-lg-3">
                        <div className="login_form  inner_page">
                            <form onSubmit={handelSubmit}>
                                <div className="heading text-center">
                                    <h3>Login to your account</h3>
                                    <p className="text-center">
                                        Dont have an account?{' '}
                                        <Link
                                            href="/register"
                                            className="text-thm"
                                        >
                                            Sign Up!
                                        </Link>
                                    </p>
                                </div>
                                {/* End .heading */}

                                <div className="input-group mb-2 mr-sm-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        placeholder="User Name Or Email"
                                        name="email"
                                    />
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="flaticon-user"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* End .input-group */}

                                <div className="input-group form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        required
                                        placeholder="Password"
                                        name="password"
                                    />
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="flaticon-password"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* End .input-group */}

                                <div className="form-group form-check custom-checkbox mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="remeberMe"
                                    />
                                    <label
                                        className="form-check-label form-check-label"
                                        htmlFor="remeberMe"
                                    >
                                        Remember me
                                    </label>

                                    <a className="btn-fpswd float-end" href="#">
                                        Forgot password?
                                    </a>
                                </div>
                                {/* End .form-group */}

                                <button
                                    type="submit"
                                    className="btn btn-log w-100 btn-thm"
                                    disabled={loading}
                                >
                                    Log In
                                </button>
                                {/* login button */}

                                <div className="divide">
                                    <span className="lf_divider">Or</span>
                                    <hr />
                                </div>
                                {/* devider */}

                                <div className="row mt25">
                                    <div className="col-lg-6">
                                        <button
                                            type="submit"
                                            className="btn btn-block color-white bgc-fb mb0 w-100"
                                        >
                                            <i className="fa fa-facebook float-start mt5"></i>{' '}
                                            Facebook
                                        </button>
                                    </div>
                                    {/* End .col */}

                                    <div className="col-lg-6">
                                        <button
                                            type="submit"
                                            className="btn btn2 btn-block color-white bgc-gogle mb0 w-100"
                                        >
                                            <i className="fa fa-google float-start mt5"></i>{' '}
                                            Google
                                        </button>
                                    </div>
                                    {/* End .col */}
                                </div>
                                {/* more signin options */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
