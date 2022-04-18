import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })
    const [
        signInWithEmailAndPassword,
        user, loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/"
    const handleLogin = e => {
        e.preventDefault();
        if (email.value === "") {
            setEmail({ value: "", error: "Email Required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password Required" })
        }
        if (email.value && password.value) {
            signInWithEmailAndPassword(email.value, password.value)
        }
    }

    if (user) {

        navigate(from, { replace: true })

    }
    const handleEmail = (emailInput) => {
        setEmail({ value: emailInput, error: "" });
    }
    const handlePassword = (PassInput) => {
        setPassword({ value: PassInput, error: "" });
    }

    if (error) {
        if (error.message.includes("user-not-found")) {
            toast.error("User Invalid", { id: "test" })
        }
    }
    if (error) {
        if (error.message.includes("network-request-failed")) {
            toast.error("Network failed", { id: "test" })
        }
    }
    return (
        <div className='mt-32'>
            <Toaster position="top-center" />
            <div className='w-1/5 mx-auto'>
                <form onSubmit={handleLogin}>
                    <h1 className='text-center text-4xl mb-10'>Login</h1>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input onBlur={e => handleEmail(e.target.value)} name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input onBlur={e => handlePassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div className="flex items-start mb-6">
                        <h2>Don't have any <Link className='text-blue-500' to="/register">account?</Link></h2>
                    </div>
                    <div className="flex items-start mb-6">
                        <h2>Forget <Link to="/forgetPassword" className='text-blue-500' type='submit'>Password?</Link></h2>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Login;