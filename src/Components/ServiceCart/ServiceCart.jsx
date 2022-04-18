import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../../image/price-table.png"
const ServiceCart = () => {
    return (
        <div className='bg-orange-600 w-4/5 mb-10'>
            <div className=' py-11 px-16'>
                <h2 className='font-medium text-5xl ml-4 -mb-6 block z-10 text-white'>10<sup>$</sup></h2>
                <div className='bg-orange-700 h-9 md:w-40 text-right'>
                    <span className='p-4 text-white'>per hour</span>
                </div>

            </div>
            <div>
                <img className='w-full  right-0 left-0' src={bg} alt="" />
                <div className=' bg-gray-100 flex flex-col justify-center items-center'>
                    <div className='mt-14 text-center'>
                        <p className='text-md text-gray-500 mb-5'>Case Evaluation</p>
                        <p className='text-md text-gray-500 mb-5'>Assist in case Development</p>
                        <p className='text-md text-gray-500 mb-5'>Provide Written Statement</p>
                        <p className='text-md text-gray-500 mb-10'>obtain other Expert Witnesses</p>
                    </div>
                </div>
            </div>
            <div className=' w-full h-14 flex justify-center items-center cursor-pointer'>
                <Link to="/checkout" className='text-center'>CHOOSE NOW</Link>
            </div>
        </div >
    );
};

export default ServiceCart;