import React from 'react';
import me from "../../image/me.png"
const About = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto mt-32'>
                <div className='grid grid-cols-2 p-20'>
                    <div className='float-right'>
                        <img className='' src={me} alt="" />
                    </div>
                    <div className='flex flex-col justify-start items-start mt-8'>
                        <p className='text-stone-800'>Hi, I'm Rakibul Hasan shaon. I am a self-learner and motivated student. I always try to work hard to get things done. I am a hardcore tech lover. I am very interested in defense equipment and also space !</p>
                        <p className='text-stone-800 my-10'>
                            My goal is to be a good software engineer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;