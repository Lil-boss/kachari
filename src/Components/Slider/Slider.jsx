import React from 'react';
import lawyer from "../../image/lawyer.png"

const Slider = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto mt-16'>
                <div className='grid md:grid-cols-2 gap-6 p-10'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-6xl mb-6'>Mr. Stuart Jackson</h1>
                        <h4 className='text-2xl mb-4'>Expert Lawyer</h4>
                        <p className='text-base text-gray-600 mb-6'>Hi, I am expert lawyer. We solve your problems tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
                        <button className='h-8 w-44 bg-slate-800 text-white border-0 rounded-lg'>Make an appointment</button>
                    </div>
                    <div className='ml-6'>
                        <img className='h-full' src={lawyer} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;