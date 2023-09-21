import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        logIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login successfully....',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(error => console.log(error))
    };
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered" />
                            {errors.email && <span className='text-orange-500 font-semibold'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="text" placeholder="Password" className="input input-bordered" />
                            {errors.password && <span className='text-orange-500 font-semibold'>Password is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p className="text-center">New Here? <Link to={"/signup"} className="font-md underline text-orange-500">Create an account</Link></p>
                    </form>
                </div>
            </div>
        </div>




        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input defaultValue="Your Name" {...register("name", { required: true })} />
        //     {errors.name && <span className='text-orange-500 font-semibold'>Name is required</span>}
        //     <input defaultValue={"Enter Email"} {...register("email", { required: true })} />
        //     {errors.email && <span className='text-orange-500 font-semibold'>Email is required</span>}
        //     <input defaultValue={"Password"} {...register("password", { required: true })} />
        //     {errors.password && <span className='text-orange-500 font-semibold'>Password is required</span>}
        //     <input type="submit" />
        // </form>
    );
};

export default Login;