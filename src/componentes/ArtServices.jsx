import React from "react";

const ArtServices = () => {
  return (
    <>
      <p className="text-white font-normal  text-[22px] p-10">
        <a className="text-[#ffff]" href="/">
          Homepage
        </a>
        /Art Services in Arizona
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-3/4 lg:w-[40%] px-5 text-white">
          <div className="py-[30px]">
            <h1 className="font-bold">Our Services</h1>
            <h2 className="tracking-wider font-extrabold">
              Original Artwork From World-Renowned Artist Miguel Camarena
            </h2>
            <ul className="list-disc ml-5">
              <li>
                Original paintings ranging from abstract, contemporary,
                southwest, impressionistic, modern, and more.
              </li>
              <li>
                Custom paintings and commission work are available upon request.
                
                </li>
                <li>                Please &nbsp;
                <a href="/contact" className="underline text-white text-[18px]">
                  contact us &nbsp;
                </a>{" "}
                for more information.
              </li>
            </ul>
            <button className="text-yellow-400 text-[18px] underline mt-4">
              Learn More
            </button>
          </div>
          <div className="pb-[30px]">
            <h2 cclassName="tracking-wider font-extrabold">Exclusive High-Quality Giclee Prints On Canvas.</h2>
            <li>Fine art reproduced to the highest standard, printed in-house on the highest quality canvas with the latest technology for long-lasting, pristine pieces of art.</li>
            <li>Custom sizes are available upon request.</li>
            <li>Hand-embellished options are available for any giclee print.
            </li>
          </div>
          <div className="pb-[30px]">
            <h2 className="tracking-wider font-extrabold">
              In-Home And Office Art Consultations In Arizona
            </h2>
            <ul className="list-disc ml-5">
              <li>
                We will visit your location to assist with your selection of
                artwork.
              </li>
              <li>Specific sizes and dimensions can be recommended.</li>
            </ul>
            <button className="text-yellow-400 text-[18px] underline mt-4">
              Learn More
            </button>
          </div>
          <div className="pb-[30px]">
            <h2 className="tracking-wider font-extrabold">Wholesale Distribution In Arizona</h2>
            <p className="mt-2">
              Miguel Camarena Art Gallery is an industry leader in wholesale
              distribution in Arizona and around the world, providing artwork to
              hotels, galleries, designers, and art consultants. We are set up
              for large-scale and short lead times to serve all your art needs.
            </p>
            <button className="text-yellow-400 underline text-[18px] mt-4">
              Learn More
            </button>
          </div>
          <div className="pb-[30px]">
            <h2 className="tracking-wider font-extrabold">
              Renting Artwork For Real Estate And Home Staging
            </h2>
            <p className="mt-2">
              You need the perfect accent pieces to help sell your home or
              office building. Miguel Camarena offers art for rent for both
              originals as well as giclee prints on canvas.
            </p>
            <ul className="list-disc ml-5">
              <li>
                Fees for renting are 10% of the total cost of the piece per
                month for giclee prints on canvas and 5% per month for original
                paintings.
              </li>
              <li>
                On giclee prints on canvas, we offer standard sizes as well as
                custom sizes if you're looking to fill a specific spot.
              </li>
            </ul>
            <p>Contact us if you have any questions.</p>
            <button className="text-yellow-400 text-[18px] underline mt-4">
              Learn More
            </button>
          </div>

          <div className="pb-[30px]">
            <p className="text-#f6c934 underline bold mt-6">
              Miguel Camarena Art Gallery
            </p>
            <p>Open Monday through Sunday, 10:00 a.m. to 6:00 p.m.</p>
            <p>6220 E Cave Creek rd., Cave Creek, Arizona 85331</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtServices;
