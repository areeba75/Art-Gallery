import React from 'react'
import giclee_img from '../../assets/giclee_img.webp'
import giclee_img_2 from '../../assets/giclee_img_2.webp'
import giclee_img_3 from '../../assets/giclee_img_3.webp'
import giclee_img_4 from '../../assets/giclee_img_4.webp'

const GicleeImage = () => {
  return (
   <section>
        <div className='flex flex-col lg:flex-row lg:space-x-10 justify-center py-12 space-y-4 lg:space-y-0'>
            <div className='xl:w-1/5'>
                <img src={giclee_img} alt="" className='lg:h-[480px]'/>
            </div>

            <div className='xl:w-1/5 '>
                <img src={giclee_img_2} alt="" className='lg:h-[480px] w-auto text-center'/>
            </div>

            <div className=' xl:w-1/5 '>
                <img src={giclee_img_3} alt="" className='lg:h-[480px] lg:w-[440px] w-auto'/>
            </div>

            <div className=' xl:w-1/5 '>
                <img src={giclee_img_4} alt="" className='lg:h-[480px] lg:w-[440px] w-auto'/>
            </div>
        </div>
   </section>
  )
}

export default GicleeImage
