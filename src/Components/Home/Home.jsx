import React from 'react';
import Slider from '../Slider/Slider';
import Service from "../Service/Service"
import ContactUs from '../ContactUs/ContactUs';
const Home = () => {
    return (
        <div>
            <Slider />
            <div className='w-4/5 mx-auto mt-10 mb-3'>
                <div className='grid md:grid-cols-3 gap-5'>
                    <div className='flex flex-wrap items-center'>
                        <h1 className='text-3xl font-bold'>Why you <br /><span className='text-stone-500'>Choose</span> me?</h1>
                        <p className='text-slate-500'>
                            Lawyer boluptatum deleniti atque corrupti quosres et quas molestias cepturi sint eca itate non vident, similique sunt in culpa modi tempora incidunt ut labore et dolor am aera
                        </p>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        <h3 className='text-xl hover:text-stone-300'>Fight for Justice</h3>
                        <p className='text-sm mt-4 text-gray-600'>Fight for justice is our main goal voluptatum it atque corrupti quos es et quas molestias pturi sint occaeca tate non</p>
                        <h3 className='text-xl mt-6 hover:text-stone-300'>Most Experienced</h3>
                        <p className='text-sm mt-4 text-gray-600'>We have experienced lawyer’s deleniti atque corrupti quos es et quas molestias cepturi int occaeca tate non provident similique</p>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        <h3 className='text-xl hover:text-stone-300'>Best Case Strategy</h3>
                        <p className='text-sm mt-4 text-gray-600'>Case strategy is the key to success atque rupti quos es et quas molestias cepturi sint occaeca tate non provident, similique sunt</p>
                        <h3 className='text-xl mt-6 hover:text-stone-300'>Quick Case Solve</h3>
                        <p className='text-sm mt-4 text-gray-600'>voluptatum deleniti atque corrupti quos es et quas molestias cepturi sint occaeca tate non provident, similique sunt</p>
                    </div>
                </div>
            </div>
            <Service />
            <ContactUs />
        </div>
    );
};

export default Home;