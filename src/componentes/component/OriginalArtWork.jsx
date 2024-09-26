import React from "react";
import original from "../../assets/original.webp";
import horse from "../../assets/arzHorsea.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { useState } from "react";
import { data } from "autoprefixer";

const OriginalArtWork = () => {

    const [currentPage, setcurrentPage] = useState(1);
    const itemsPerPage=12;

    const totalPages=Math.ceil(imgArray.length / itemsPerPage);
const startIndex=(currentPage-1) * itemsPerPage;

const selectedItems = imgArray.slice(startIndex, startIndex + itemsPerPage)


const handelCurrentPage=(value)=>{
  setcurrentPage(value)
}


  return (
    <section>
      <div className=" mx-auto">
        <div className="flex justify-center flex-wrap gap-8">
          {imgArray.map((item, index) => (
            <div key={index} className="p-2">
              <div className="w-full md:w-[300px]">
                <img src={item.image} alt="Img" />
              </div>
              <h1 className="text-[22px] font-crimson">{item.h1}</h1>
              <p className="text-[22px] text-gray-400">{item.p}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-8 justify-center items-center mt-12'>
            {
              currentPage > 1 && (
                <button
                  onClick={() => handelCurrentPage(currentPage - 1)}
                  className='px-2 py[20px] border border-yellow-400 hover:border-yellow-700  hover:text-yellow-700 text-5xl sm:text-[20px]'
                >
                  &#11207;
                </button>
              )
            }
            <p className='text-5xl sm:text-lg text-[#F6C934]'>Page {currentPage} of {totalPages}</p>
            {
              currentPage < totalPages && (
                <button
                  onClick={() => handelCurrentPage(currentPage + 1)}
                  className='px-2 py[20px] border border-yellow-400 hover:border-yellow-700  hover:text-yellow-700 text-5xl sm:text-[20px]'
                >
                  &#11208;
                </button>
              )
            }
          </div>
    </section>
  );
};

  const imgArray = [
    { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    { image: "/Acrylic.webp", h1: "Arizona Horses", p: 195 },
    { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: 195 },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: 195 },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: 195 },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
    // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  ];

export default OriginalArtWork;
