import React from 'react';

const Spinner = () => {
    return (
        <div className='mt-32  w-4/5 mx-auto flex justify-center items-center'>
            <div class="spinner-border animate-spin w-8 h-8 border-4 rounded-full text-blue-300" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;