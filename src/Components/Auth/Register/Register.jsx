import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [
        createUserWithEmailAndPassword,
        user, loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, AuthError] = useSendEmailVerification(
        auth
    );
    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })
    const [confirmPass, setConfirmPass] = useState({ value: "", error: "" })

    const handleEmail = (emailInput) => {
        if (/^\S+@\S+\.\S+$/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });
        } else {
            setEmail({ value: "", error: "Invalid Email" });
        }

    }
    const handlePassword = (PassInput) => {
        if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(PassInput)) {
            setPassword({ value: PassInput, error: "" });
        } else {
            setPassword({ value: "", error: "one capital letter, one number,one special character, length 6 to 10" });
        }

    }
    const handleConfirmPass = (ConfirmPassInput) => {

        if (ConfirmPassInput === password.value) {
            setConfirmPass({ value: ConfirmPassInput, error: "" });
        } else {
            setConfirmPass({ value: "", error: "Password not match" });
        }

    }


    const handleRegister = async (e) => {
        e.preventDefault();
        if (email.value === "") {
            setEmail({ value: "", error: "Email Required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password Required" })
        }
        if (email.value && password.value && confirmPass.value === password.value) {
            createUserWithEmailAndPassword(email.value, password.value);
            await sendEmailVerification();
            toast.success("Mail sent")

        }

    }
    if (GoogleUser) {
        navigate(from, { replace: true })
    }
    if (sending) {
        toast.success("sending....")
    }
    if (error) {
        if (error?.message.includes("email-already-in-use")) {
            toast.error("User Exits", { id: "test" })
        }
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }

    if (GoogleError) {
        console.log(GoogleError);
        if (GoogleError.message.includes("popup-closed-by-user")) {
            toast.error("Popup Closed", { id: "test" })
        }
    }

    return (
        <div className='w-3/12 mx-auto mt-36'>
            <Toaster position="top-center" />
            <div>
                <form onSubmit={handleRegister}>
                    <h1 className='text-center text-4xl mb-10'>Register</h1>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onBlur={event => handleEmail(event.target.value)} type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    {
                        email?.error && <p className='text-xs text-red-600 -mt-5'>{email.error}</p>
                    }
                    <div className="relative z-0 mb-6 w-full group">
                        <input onBlur={event => handlePassword(event.target.value)} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    {
                        password?.error && <p className='text-xs text-red-600 -mt-5'>{password.error}</p>
                    }
                    <div className="relative z-0 mb-6 w-full group">
                        <input onBlur={event => handleConfirmPass(event.target.value)} type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label htmlFor="floating_repeat_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>
                    {
                        confirmPass?.error && <p className='text-xs text-red-600 -mt-5'>{confirmPass.error}</p>
                    }
                    <div className="flex items-start mb-6">
                        <h2>Already have an <Link className='text-blue-500' to="/login">account?</Link></h2>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
                <button onClick={() => signInWithGoogle()} className="mt-8 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Login With Google</button>
            </div>
        </div>
    );
};

export default Register;