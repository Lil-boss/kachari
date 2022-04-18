import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const [name, setName] = useState({ value: "", error: "" })
    const [number, setNumber] = useState({ value: "", error: "" })
    const [address, setAddress] = useState({ value: "", error: "" })
    const handleName = (nameInput) => {
        if (nameInput) {
            setName({ value: nameInput, error: "" })
        } else {
            setName({ value: "", error: "Name require" })
        }

    }
    const handleNumber = (numberInput) => {
        if (numberInput) {
            setNumber({ value: numberInput, error: "" })
        } else {
            setNumber({ value: "", error: "Number require" })
        }

    }
    const handleAddress = (addressInput) => {
        if (addressInput) {
            setAddress({ value: addressInput, error: "" })
        } else {
            setAddress({ value: "", error: "Address require" })
        }

    }

    const handleSubmitForm = async () => {
        if (name.value && number.value && address.value) {
            Swal.fire(
                'Thanks for Help!',
                'You submitted the form',
                'successfully'
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',

            })
        }

    }
    return (
        <div className='mt-32'>
            <div className='w-1/5 mx-auto'>
                <form onSubmit={handleSubmitForm} >
                    <h1 className='text-center text-4xl mb-10'>Check-Out Form</h1>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input onBlur={e => handleName(e.target.value)} name="name" type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    {name.error && <p className='text-xs text-red-600 -mt-5'>{name.error}</p>}
                    <div className="mb-6">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                        <input onBlur={e => handleNumber(e.target.value)} name="number" type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    {number.error && <p className='text-xs text-red-600 -mt-5'>{number.error}</p>}
                    <div className="mb-6">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                        <input onBlur={e => handleAddress(e.target.value)} type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    {
                        address.error && <p className='text-xs text-red-600 -mt-5'>{address.error}</p>
                    }
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;