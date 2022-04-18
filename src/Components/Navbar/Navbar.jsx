import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false)

    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className="fixed top-0 w-full z-10 bg-slate-400 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className='w-4/5 mx-auto'>
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <a href="/" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">KACHARI</span>
                        </a>
                        <button onClick={() => setOpen(!open)} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {open ? <svg className="hidden w-6 h-6" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> : <svg className="w-6 h-6" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>}
                        </button>
                        <div className={`${open ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"}`} id="mobile-menu">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>

                                <li>
                                    <Link to="/service" >Services</Link>
                                </li>
                                <li>
                                    <Link to="/blogs" >Blogs</Link>
                                </li>

                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact" >Contact</Link>
                                </li>
                                {
                                    user ? <li>
                                        <Link to="" onClick={handleLogOut}>Log Out</Link>
                                    </li> : <li>
                                        <Link to="/login" >Login</Link>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;