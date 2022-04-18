import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();

    return (
        <div>
            <div className='m-y-10 h-32 bg-stone-700 flex flex-col items-center justify-center'>
                <p className='text-white'>&copy;Copyright, {date.getFullYear()} All right reserved by <Link to="/">KACHARI</Link></p>
            </div>
        </div>
    );
};

export default Footer;