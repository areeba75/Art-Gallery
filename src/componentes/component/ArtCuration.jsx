import React from 'react'
// import art from '../../assets/art_curation.webp'
import art_curation from '../../assets/art_curation.webp'

const ArtCuration = () => {
  return (
    <section>
    <div className='flex items-center '>
        <div className='w-full'>
            <img src={art_curation} alt="" className='w-[100%]'/>
        </div>

        <div className='hidden lg:block'>
        <div className='flex justify-center  m-auto'>
           <div className='px-12 space-y-10 text-white'>
           <h1 className='text-[#F6C936] text-3xl font-bold'>State-Of-The-Art Art Curation Services</h1>
            <p className='text-lg'>Our artist consultation services have helped many business owners and individual art collectors in finding the perfect artwork for their space in a perfect size. Sometimes, what we think might look good in our place doesn't actually turn out well. An artist consultant can tell you better what goes with the theme of your space and what size will look perfect.</p> <br />
            <p className='text-lg'>Call Us Now At (480) 595-2671</p>
          
           </div>
        </div>
        </div>
    </div>
</section>  
  )
}

export default ArtCuration
