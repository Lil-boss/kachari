import React from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';
import icon from "../../image/icon.png"
const Service = () => {
    return (
        <div id="service" className=' w-4/5 mx-auto mt-14'>
            <div className='flex flex-col justify-center items-center mb-6'>
                <img className='' src={icon} alt="" />
            </div>
            <div className='mb-8'>

                <h1 className='text-center text-3xl font-semibold mb-4'>Choose your Package</h1>
                <p className='text-center text-gray-600 w-3/4 mx-auto'>Lawyer boluptatum deleniti atque corrupti quos dolores et quas molestias cepturi sint eca itate non provident, similique sunt in culpa modi tempora incidunt ut labore et dolor am aerat</p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <ServiceCart />
                <ServiceCart />
                <ServiceCart />
            </div>
        </div>
    );
};

export default Service;