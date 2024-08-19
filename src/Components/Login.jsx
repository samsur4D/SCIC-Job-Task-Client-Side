/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useForm} from "react-hook-form"
import UseAuth from "../CustomHook/UseAuth";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const [show, setShow] = useState(false)
	const navigate = useNavigate();
	const toggleShow = () => {
		setShow(!show)
	}
	const {signInUser, googleLogin} = UseAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm()
	  const onSubmit = (data) => {
		const {email, password} = data;
		signInUser(email, password)
		.then((result) => {
			navigate("/productpage", { replace: true });
		})
		.catch((error) => {
			toast.error("Please enter a valid email & password")
		})
		navigate("/productpage", { replace: true });
	  }

    useEffect(() => {
        document.title = 'Login Page';
        return () => {
          document.title = 'Title';
        };
      }, []);

  return (
    <div className="contain">           
      <div className="w-full mx-auto max-w-md p-4 rounded-md  sm:p-8">
	<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
	<div className="my-6 space-y-4">
		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1" onClick={() => googleLogin()}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full" />
		<p className="px-3">OR</p>
		<hr  className="w-full" />
	</div>
	<form noValidate="" action="" className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md" {...register("email", { required: true })}/>
				{errors.email && <span className='text-sm text-red-600 font-semibold'>This field is required</span>}
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
				</div>
				<div className='w-full px-3 py-2 border rounded-md flex  justify-between items-center'>
					<input type={show ? "text" : "password"} name="password" id="password" placeholder="*****" className="w-full outline-none" {...register("password", { required: true })}/>					
					{show ? <IoEyeOutline className='text-xl cursor-pointer' onClick={toggleShow}/> : <IoEyeOffOutline className='text-xl cursor-pointer' onClick={toggleShow}/>}
					</div>
				{/* <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md" {...register("password", { required: true })}/> */}
				{errors.password && <span className='text-sm text-red-600 font-semibold'>This field is required</span>}
			</div>
		</div>
		<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white">Sign in</button>
	</form>
    <p className="text-md text-center mt-3">Dont have account?
		<Link to={"/register"} rel="noopener noreferrer" className="focus:underline hover:underline font-semibold"> Sign up here</Link>
	</p>
</div>
<ToastContainer />
    </div>
  )
}

export default Login
