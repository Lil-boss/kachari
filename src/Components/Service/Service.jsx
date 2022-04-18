import React, { useEffect, useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';
import icon from "../../image/icon.png"
const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='w-4/5 mx-auto mt-14'>
            <div className='flex flex-col justify-center items-center mb-6'>
                <img className='' src={icon} alt="" />
            </div>
            <div className='mb-8'>
                <h1 className='text-center text-3xl font-semibold mb-4'>Choose your Package</h1>
                <p className='text-center text-gray-600 w-3/4 mx-auto'>Lawyer soothes and corrupts what pains and annoyances they will receive;</p>
            </div>
            <div className='grid  md:grid-cols-3 gap-6 justify-items-center'>
                {
                    services.map(result => <ServiceCart key={result.id} service={result} />)
                }
            </div>
        </div>
    );
};

export default Service;