import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully create new user......',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    };
    return (
        <>
            <Helmet>
                <title>Recipe | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="neme" {...register("name")} placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className='text-orange-500 font-semibold'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 12,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password === 'required' && <span className='text-orange-500 font-semibold'>Password is required</span>}
                                {errors.password === 'minLength' && <span className='text-orange-500 font-semibold'>Password must be 6 characters</span>}
                                {errors.password === 'maxLength' && <span className='text-orange-500 font-semibold'>Password must be less than 20 characters</span>}
                                {errors.password === 'pattern' && <span className='text-orange-500 font-semibold'>Password must have one Uppercase one lower case, one number and one special character.</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p className="text-center">Already Have an account? <Link to={"/login"} className="font-md underline text-orange-500">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;