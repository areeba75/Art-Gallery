import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const CallUs = () => {
  return (
    <section>
    <div>
        <div className='text-[#F6C936] text-center lg:w-1/3 m-auto space-y-6'>
            <h1 className='md:text-3xl text-2xl font-bold'>Call Us Anytime - Even on Sundays!</h1>
            <p className='p-5'>We’re never too busy for our clients, and that means we’ll answer you even on weekends. Feel at home with us, and tell us every detail of your requirements so we can pick out the best design and size for you. We take full pride in our free art consulting service and want you to take full advantage of that. See you soon at our art gallery in Cave Creek, Arizona!</p>
            <Link to={'/contact'}>
            <button className='flex items-center text-lg bg-[#F6C936] text-black px-4 py-1 my-2 m-auto'>Contact Us Now
            <IoIosArrowForward />
            </button></Link>
        </div>
    </div>
</section>
  )
}

export default CallUs
