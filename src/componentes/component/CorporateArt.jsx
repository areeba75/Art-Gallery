import React from 'react'
import art_corporate from '../../assets/art_corporate.webp'

const CorporateArt = () => {
  return (
<section>
    <div className='flex items-center '>
        <div className='w-full'>
            <img src={art_corporate} alt="" className='w-[100%]'/>
        </div>

        <div className='hidden lg:block'>
        <div className='flex justify-center  m-auto'>
           <div className='px-12 space-y-10 text-white'>
           <h1 className='text-[#F6C936] xl md:text-3xl font-bold'>Corporate Art Consultation</h1>
            <p className='text-lg'>Our corporate art consultant has a keen eye for exclusive art and design. They connect with companies and business owners to fulfill their art requirements which suit best with their values, culture, and brand image. Our corporate art consultant combines creative experience with strategic insights to pick thought-provoking pieces for your office environments and source engaging artworks for lobbies and boardrooms.</p>
          
          
           </div>
        </div>
        </div>
    </div>
</section>  
  )
}

export default CorporateArt
