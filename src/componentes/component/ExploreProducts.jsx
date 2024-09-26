import React from "react";
import sunflower from "../../assets/sunflower.webp";
import { Link } from "react-router-dom";

const ExploreProducts = () => {
  return (
    <section className="space-y-10">
      <div className="flex flex-wrap justify-center lg:justify-start px-10 text-[#f6c936]">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-4">
          <img src={sunflower} alt="" className="" />
          <h1 className="text-md py-4 text-center lg:text-start">
            [AG#001] Beautiful Agaves Print on Canvas{" "}
          </h1>
          <p className="text-gray-300/40 font-semibold text-center lg:text-start">
            From $ 95{" "}
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-4">
          <img src={sunflower} alt="" className="" />
          <h1 className="text-sm py-4 text-center lg:text-start">
            [BU#004] Colorful Abstract Buffalo
          </h1>
          <p className="text-gray-300/40 font-semibold text-center lg:text-start">
            From $ 95
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-4">
          <img src={sunflower} alt="" className="" />
          <h1 className="text-xl py-4 text-center lg:text-start">
            [DA#001] Abstract Javelina
          </h1>
          <p className="text-gray-300/40 font-semibold text-center lg:text-start">
            From $ 95{" "}
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-4">
          <img src={sunflower} alt="" className="" />
          <h1 className="text-xl py-4 text-center lg:text-start">
            [DL#007] Pinnacle Peak Landscape 02{" "}
          </h1>
          <p className="text-gray-300/40 font-semibold text-center lg:text-start">
            From $ 95{" "}
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-4">
          <img src={sunflower} alt="" className="" />
          <h1 className="text-xl py-4 text-center lg:text-start">
            [DL#028] Prickly Pear Cactus on Red BG{" "}
          </h1>
          <p className="text-gray-300/40 font-semibold text-center lg:text-start">
            From $ 95{" "}
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-4">
          <img src={sunflower} alt="" className="" />
          <h1 className="text-xl py-4 text-center lg:text-start">
            [DO#0015] Margarita Mule{" "}
          </h1>
          <p className="text-gray-300/40 font-semibold text-center lg:text-start">
            From $ 95
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-4">
          <img src={sunflower} alt="" className="" />
          <h1 className="text-xl py-4 text-center lg:text-start">
            [DO#006] Three Donkeys
          </h1>
          <p className="text-gray-300/40 font-semibold text-center lg:text-start">
            From $ 95{" "}
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 py-4">
          <img src={sunflower} alt="" className="" />
          <h1 className="text-xl py-4 text-center lg:text-start">
            [FO#002] Sunflower{" "}
          </h1>
          <p className="text-gray-300/40 font-semibold text-center lg:text-start">
            From $ 215{" "}
          </p>
        </div>
      </div>

      <div className="pl-10">
        <Link to={"/collection"} className="">
          <button className="text-[#f6c936]">
            Explore All Products
            <hr className="w-auto h-[2px] bg-yellow-500 mt-2" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ExploreProducts;
