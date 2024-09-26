import React from 'react';
// import AddToCard from '../components/AddToCard';
import AddToCard from './AddToCard';
import Slider from 'react-slick';
const Products = () => {
  return (
    <>
      <section>
        <div className='text-white md:w-[1184px] m-auto pb-10'>
          {/* main div */}
          <div className='flex flex-col md:flex-row w-full '>
            <div className='md:w-1/2 mt-10 p-2'
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="500"
            >
              <img src="/product.webp" alt="" className='h-[350px] w-full'/>
            </div>
            <div className='px-2 md:pl-28 pt-2 md:pt-14 md:w-1/2'>
              <AddToCard/>
            </div>
          </div>
        </div>
        <div className='w-full'>
        <Slider
          mainHeading={`You may also like`}
          />
        </div>
        <div className='w-full'>
        <Slider
          mainHeading={`Recently viewed`}
           />
           
        </div>
      </section>
    </>
  )
}
export default Products;


