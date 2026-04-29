import React from "react";
import SearchBar from "../searchBar/index.jsx";

const Hiro = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#d9d0e6] to-[#cfc6dd] 
                    flex flex-col md:flex-row items-center 
                    px-6 md:px-10 py-10 md:py-0 md:h-80 lg:h-90 overflow-hidden">
      
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10 items-start">
        <p className="text-2xl sm:text-3xl font-bold text-black text-left leading-snug">
          Grocery Delivered at your Doorstep
        </p>

        <div className="relative w-full">
          <SearchBar />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-end mt-6 md:mt-0 md:self-end">
        <img
          className="h-48 sm:h-60 md:h-64 lg:h-72 w-auto object-contain"
          src="https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/imageBanner.png?q=low&webp=1"
          alt="grocery banner"
        />
      </div>
    </div>
  );
};

export default Hiro;