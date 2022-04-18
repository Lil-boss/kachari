
import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';

const ForgetPassword = () => {
    const [email, setEmail] = useState({ value: "", error: "" });
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const handleEmailField = (mail) => {
        setEmail({ value: mail, error: "" })
    }


    const handleForgetPassword = async (e) => {
        e.preventDefault();
        if (email.value) {
            await sendPasswordResetEmail(email.value);
            toast.success("Mail sent");
        }
    }
    if (sending) {
        toast.success("sending....");
    }
    return (
        <div>
            <div className='w-1/5 mx-auto'>
                <form onSubmit={handleForgetPassword}>
                    <h1 className='text-center text-4xl mb-10'>Login</h1>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input onBlur={event => handleEmailField(event.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sent</button>
                </form>

            </div>
        </div>
    );
};

export default ForgetPassword;