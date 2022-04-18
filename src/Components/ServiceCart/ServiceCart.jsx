import { Link } from 'react-router-dom';
import bg from "../../image/price-table.png"
import "./servicecart.css"
const ServiceCart = ({ service }) => {
    const { price, type, facility } = service;
    const data = Object.entries(facility).map(([key, value]) => (value))
    return (
        <div className=' w-4/5 mb-10'>

            <div className='py-11 px-16 relative bg-pic h-48'>
                <h2 className='font-medium text-5xl ml-4 -mb-6 block z-10 text-white'>{price}<sup>$</sup></h2>
                <div className='bg-stone-400 h-9 md:w-40 text-right'>
                    <span className='p-4 text-white'>per hour</span>
                </div>
                <h3 className='text-2xl text-white text-center mt-4'>{type}</h3>
            </div>
            <div className='mb-0 mt-0'>
                <img className='w-full right-0 left-0' src={bg} alt="" />
                <div className=' bg-stone-100 flex flex-col justify-center items-center'>
                    <div className='text-center h-40'>
                        <p className='text-md text-gray-500 my-4'>{data}</p>
                    </div>
                </div>
            </div>
            <div className='bg-stone-700 hover:bg-stone-800 w-full h-14 flex justify-center items-center cursor-pointer'>
                <Link to="/checkout" className='text-center text-white inline-block'>CHOOSE NOW</Link>
            </div>
        </div >
    );
};

export default ServiceCart;