import img from '../assets/login/login2.jpg';
import imgbg from '../assets/login/login-bg.jpg';
import 'react-awesome-button/dist/styles.css';
import { AwesomeButton } from 'react-awesome-button';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../privuder/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosNoSecure from '../hocks/useAxiosNoSecure';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';


const SignUp = () => {
    const axiosNoSecure = useAxiosNoSecure()
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const handaleSignUp = (data) => {
        const { name, photo, email, password } = data;
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUser(name, photo)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email,
                        }
                        console.log("User profile Update");
                        //user info creating using axios
                        axiosNoSecure.post("/users", userInfo)
                            .then(res => {
                                console.log("kkkk", res.data)
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Login Success",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    reset();
                                }
                            })

                    })
                    .catch(error => {
                        console.log(error)
                    })

                navigate("/");
            })

    }
    return (
        <>
            <Helmet>
                <title>Coffe House /SignUp</title>
            </Helmet>
            <div style={{ backgroundImage: `url(${imgbg})` }} className="hero min-h-screen ">
                <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
                    <div className='md:w-8/12'>
                        <img className='rounded border-4 border-red-200 shadow-2xl shadow-green-300 blur-sm' src={img} alt="" />
                    </div>
                    <div className="card md:w-8/12 shrink-0 mt-32 w-full border-4 border-red-200 max-w-sm shadow-2xl shadow-orange-200 bg-base-100">
                        <h1 className='text-xl text-center font-bold p-5'>SignUp Now..</h1>
                        <form onSubmit={handleSubmit(handaleSignUp)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })} placeholder="Enter name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" name='photo' {...register("photo", { required: true })} placeholder="Enter name" className="input input-bordered" />
                                {errors.photo && <span className='text-red-500'>PhotoUrl is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", { required: true, minLength: 6 })} placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "required" && <span className='text-red-500'>Password is required</span>}
                                {errors.password?.type === "minLength" && <span className='text-red-500'>Minimun 6 cherector</span>}
                            </div>
                            <div className="form-control mt-6">
                                <AwesomeButton type="secondary" ><input className='font-bold text-xl' type="submit" value="SignUp" /></AwesomeButton>
                            </div>
                            <div className="divider">OR</div>
                        </form>
                        <div className="max-w-full text-center">
                            <GoogleLogin />
                        </div>
                        <p className='p-5 text-center'>Already have an account please..<span className='text-blue-500'><Link to="/login">Login</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;