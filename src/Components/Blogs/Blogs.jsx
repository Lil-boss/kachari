import React from 'react';

const Blogs = () => {
    return (
        <div className='w-4/5 mx-auto mt-32'>
            <div>
                <h1 className='text-2xl'>Difference between authorization and authentication</h1>
                <div className='ml-4'>
                    <p className='text-xl'>Authorization</p>
                    <span>User's who want to access resource authorities checked the user's for accessing the resource</span>
                    <br />
                    <span>It's happen when user's are validate</span>
                    <br />
                    <span>It's determines What permission do user have?</span>
                    <p className='text-xl mt-4'>Authentication</p>
                    <span>It's checked who want to access to the system</span>
                    <br />
                    <span>It's checked user are valid or invalid</span>
                    <br />
                    <span>Authentication determines whether the person is user or not</span>
                    <br />
                    <span>It is done before the authorization process.</span>
                </div>
            </div>
            <div className='mt-6'>
                <h1 className='text-2xl'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <div className='ml-4'>
                    <span>It's basically used for authentication. it prevents hackers to steal data.</span>
                    <br />
                    <span>It supports authentication using passwords, phone numbers,custom auth and popular federated identity providers like Google, Facebook and Twitter, and more</span>
                </div>
            </div>
            <div className='mt-6'>
                <h1 className='text-2xl'>What other services does firebase provide other than authentication?</h1>
                <div className='ml-4'>
                    <span>It's provide cloud FireStore, Realtime database, Storage, machine Learning, Hosting, Cloud Function etc</span>
                    <br />

                </div>
            </div>
        </div>
    );
};

export default Blogs;