import React from 'react';
import lawyer from "../../image/lawyer.png"

const Slider = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto mt-16'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-wrap flex-row  items-center'>
                        <h1 className='text-6xl'>Mr. Stuart Jackson</h1>
                        <h4 className='text-2xl'>Expert Lawyer</h4>
                        <p className='text-base text-gray-600'>Hi, I am expert lawyer. We solve your problems tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
                        <button className='h-8 w-44 bg-slate-800 text-white border-0 rounded-lg'>Make an appointment</button>
                    </div>
                    <div className='ml-6'>
                        <img src={lawyer} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;