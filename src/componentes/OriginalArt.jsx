import React from 'react';
import { Link } from 'react-router-dom';
import MigualTeam from '../componentes/component/MigualTeam';
import MasterpieceDelivered from '../componentes/component/MasterpieceDelivered';
import Accordian from '../componentes/component/Accordian';
import LatestCollection from '../componentes/component/LatestCollection';

const OriginalArt = () => {
  return (
   <section className='py-10 text-white'>
        <div className='sm:space-y-10'>
            <div className='lg:w-[900px] space-y-6 lg:pl-52 p-6 lg:p-0'>
                <h1 className='text-lg sm:text-2xl lg:text-4xl font-bold text-[#f6c936]'>Original Artwork: Rare And Authentic</h1>
                <div className=''>
                    <p className=''>Welcome to Miguel Camarena's Art Gallery in Cave Creek, Arizona. We proudly present original artwork by the
                        world-renowned artist Miguel Camarena. Our collection features unique paintings inspired by Arizona's rich heritage
                        and vibrant culture. These thoughtful pieces encompass a diverse range of styles, including:</p>
                </div>
                <div className=''>
                    <li>Abstract Artwork</li>
                    <li>Contemporary Art</li>
                    <li>Southwestern Art</li>
                    <li>Impressionist and Modern Art, and much more</li>
                </div>
            </div>

            <div>
                <LatestCollection />
            </div>

            <div className='lg:w-[900px] lg:space-y-6 lg:pl-52 p-6 lg:p-0'>
                <h1 className='text-lg sm:text-2xl lg:text-4xl font-bold text-[#f6c936]'>Customize Your Painting's Size</h1>
                <div className=''>
                    <p className=''>We offer size customization to meet your preferences. Our skilled team attentively listens to your requirements and considers your space, providing expert advice on selecting the ideal size to improve your wall's aesthetics.</p> <br />

                    <p>Miguel Camarena is dedicated to ensuring an unparalleled experience by exclusively utilizing industrial-quality materials for his paintings. His artworks focus on durability and maintain their original allure over time, promising a timeless view that stays as fresh as new.</p> <br />

                    <p>Transform Your Vision Into A Remarkable Reality.</p>
                </div>
                <div className='w-auto'>
                   <Link to={'/contact'}>
                        <button className='text-[#f6c936]'> Let's Start!
                        <hr className="w-auto h-[2px] bg-yellow-500 mt-2" />
                        </button>
                   </Link>

                </div>
            </div>

            <div className='lg:w-[900px] p-6 lg:p-0 lg:pl-52'>
                <h1 className='text-lg sm:text-2xl lg:text-4xl font-bold text-[#f6c936]'>Commission Artwork In Arizona</h1>
                <div className=''>
                    <p className=''>Are you searching for a unique and personalized piece of art that reflects your tastes, interests, or brand? Miguel Camarena Art Gallery, Cave Creek, Arizona, is the perfect choice for you. We specialize in crafting art to your specific requests and requirements.</p><br />
                    <p>Our collaborative approach involves:</p>
                </div>
                <div className='px-4'>
                    <li>Closely partnering with you.</li>
                    <li>Attentively listening to your ideas.</li>
                    <li>Ensuring that the final piece surpasses your expectations.</li>
                </div>
            </div>

            <div>
                <MigualTeam />
            </div>

            <div className=''>
                <MasterpieceDelivered />
            </div>

            <div>
                <Accordian />
            </div>
        </div>
   </section>
  )
}

export default OriginalArt
