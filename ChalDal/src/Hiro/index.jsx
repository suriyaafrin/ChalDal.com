import React from "react";
import SearchBar from "../searchBar/index.jsx";

const Hiro = () => {
  return (
    <div
      className="w-full bg-linear-to-r from-[#d9d0e6] to-[#cfc6dd] 
                flex flex-col md:flex-row items-center justify-between
                px-6 md:px-10 lg:px-16 py-10 md:py-0 md:h-80 lg:h-96 overflow-hidden"
    >
      <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col gap-6 items-start justify-center h-full">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-left leading-snug">
          Grocery Delivered at your Doorstep
        </p>
        <div className="relative w-full max-w-md">
          <SearchBar />
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-5/12 flex justify-end items-end h-full mt-6 md:mt-0">
        <img
          className="h-48 sm:h-60 md:h-72 lg:h-100 w-300 object-contain"
          src="https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/imageBanner.png?q=low&webp=1"
          alt="grocery banner"
        />
      </div>
    </div>
  );
};

export default Hiro;
