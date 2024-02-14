import img from '../assets/login/login2.jpg';
import imgbg from '../assets/login/login-bg.jpg';
import 'react-awesome-button/dist/styles.css';
import { AwesomeButton } from 'react-awesome-button';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../privuder/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';

const Login = () => {
    const [valid, setValid] = useState(true);
    const { signInUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handaleLogin = (data) => {
        const email = data.email;
        const password = data.password;
        const captcha = data.captcha;
        if (validateCaptcha(captcha) === true) {
            setValid(true)
            signInUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login Success",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    navigate(from, { replace: true });
                })
        }
        else {
            setValid(false)
        }
    }

    return (
        <>
            <Helmet>
                <title>Coffe House /Login</title>
            </Helmet>
            <div style={{ backgroundImage: `url(${imgbg})` }} className="hero  min-h-screen ">
                <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
                    <div className='md:w-8/12'>
                        <img className='rounded border-4 border-red-200 shadow-2xl shadow-green-300 blur-sm' src={img} alt="" />
                    </div>
                    <div className="card md:w-8/12 shrink-0 w-full border-4 border-red-200 max-w-sm shadow-2xl shadow-orange-200 bg-base-100">
                        <h1 className='text-xl font-bold p-5'>Login Now..</h1>
                        <form onSubmit={handleSubmit(handaleLogin)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email'  {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className='text-red-700'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                                {errors.password && <span className='text-red-700'>Password is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input {...register("captcha", { required: true })} type="text" name='captcha' placeholder="captcha" className="input input-bordered" required />
                                {valid ? "" : <span className='text-red-900'>Invalidate Captacha</span>}
                            </div>
                            <div className="form-control mt-6">
                                <AwesomeButton type="secondary" ><input className='font-bold text-xl' type="submit" value="Login" /></AwesomeButton>
                            </div>
                            <div className="divider">OR</div>
                        </form>
                        <div className="max-w-full text-center">
                            <GoogleLogin />
                        </div>
                        <p className='p-2 text-center'>Your haven't an account please..<span className='text-blue-500'><Link to="/signup">SignUp</Link></span></p>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Login;