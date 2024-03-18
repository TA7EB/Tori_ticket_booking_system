import React from 'react'
import { Link } from 'react-router-dom';


const SignUp = ()=>{
    return(  
        <div className="flex items-center justify-center text-center p-6">
	<form novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg">
    <label for="name" className="self-start text-xs font-semibold">Name</label>
		<input id= "name" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none " />
        <label for="email" className="self-start text-xs font-semibold">Email</label>
		<input id= "email" type="email" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none " />
        <label for="phone_number" className="self-start text-xs font-semibold">Phone Number</label>
		<input id= "phone_number" type="number" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none " />
		<label for="password" className="self-start mt-3 text-xs font-semibold">Password</label>
		<input id="password" type="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none " />
		<label for="con_pass" className="self-start text-xs font-semibold">Confarm Password</label>
		<input id= "con_pass" type="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none " />
		<Link type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-green-600 hover:bg-green-700 text-white">SignUp</Link>
		<div className="flex justify-center mt-6 space-x-2 text-xs">
			<Link rel="noopener noreferrer" to="/" className="">Forgot Password?</Link>
			<span className="">/</span>
			<Link rel="noopener noreferrer" to="/Login" className="">Login</Link>
		</div>
	</form>
</div>
        )
    }
    export default SignUp;