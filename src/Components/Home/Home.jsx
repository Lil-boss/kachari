import React from 'react';
import Slider from '../Slider/Slider';
import Service from "../Service/Service"
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Slider />
            <div className='w-4/5 mx-auto mt-10 mb-3'>
                <div className='grid md:grid-cols-3 gap-5'>
                    <div className='flex flex-wrap items-center'>
                        <h1 className='text-3xl font-bold'>Why you <br /><span className='text-stone-500'>Choose</span> me?</h1>
                        <p className='text-slate-500'>
                            Lawyer soothes and corrupts whomsoever and what troubles they will receive, and they do not see what troubles they will receive;
                        </p>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        <h3 className='text-xl hover:text-stone-300'>Fight for Justice</h3>
                        <p className='text-sm mt-4 text-gray-600'>Fight for justice is our main goal it blinds those who are corrupted to the pleasures of the past.</p>
                        <h3 className='text-xl mt-6 hover:text-stone-300'>Most Experienced</h3>
                        <p className='text-sm mt-4 text-gray-600'>I have experienced lawyer's soothes and bribe whom you are</p>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        <h3 className='text-xl hover:text-stone-300'>Best Case Strategy</h3>
                        <p className='text-sm mt-4 text-gray-600'>Case strategy is the key to success and the new ones don't foresee who you are and what trouble they will catch.</p>
                        <h3 className='text-xl mt-6 hover:text-stone-300'>Quick Case Solve</h3>
                        <p className='text-sm mt-4 text-gray-600'>the soothing and corrupted pleasures which they are, and what troubles they will receive, they do not foresee in a blinding prowess;</p>
                    </div>
                </div>
            </div>
            <Service />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;