import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth);

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
    console.log(email);
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


    const handleRegister = (e) => {
        e.preventDefault();
        if (email.value === "") {
            setEmail({ value: "", error: "Email Required" });

        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password Required" })
        }
        if (email.value && password.value) {
            createUserWithEmailAndPassword(email.value, password.value)
        }

    }
    if (user) {
        navigate("/")
    }



    return (
        <div className='w-3/12 mx-auto mt-36'>
            <Toaster position='top-center' />
            <div>

                <form onSubmit={handleRegister}>
                    <h1 className='text-center text-4xl mb-10'>Register</h1>

                    <div class="relative z-0 mb-6 w-full group">
                        <input onBlur={event => handleEmail(event.target.value)} type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    {
                        email?.error && <p className='text-xs text-red-600 -mt-5'>{email.error}</p>
                    }
                    <div class="relative z-0 mb-6 w-full group">
                        <input onBlur={event => handlePassword(event.target.value)} type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    {
                        password?.error && <p className='text-xs text-red-600 -mt-5'>{password.error}</p>
                    }
                    <div class="relative z-0 mb-6 w-full group">
                        <input onBlur={event => handleConfirmPass(event.target.value)} type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_repeat_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>
                    {
                        confirmPass?.error && <p className='text-xs text-red-600 -mt-5'>{confirmPass.error}</p>
                    }
                    <div class="flex items-start mb-6">
                        <h2>Already have an <Link className='text-blue-500' to="/login">account?</Link></h2>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Register;