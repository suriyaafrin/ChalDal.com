import React from "react";
import { perks } from "../../data/data.js";


const Shop = () => {
  return (
    <div className="px-4 sm:px-6 py-4">
      <h2 className="text-2xl font-semibold text-gray-400 mb-5 text-center">
        Shop & Get More
      </h2>

      <div className="px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className="flex-1 flex flex-col gap-4 bg-gray-200 rounded-2xl overflow-hidden"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 text-left px-5 pt-5">
                  {perk.title}
                </h3>
                <p className="line-clamp-2 text-sm text-gray-500 text-left px-5">
                  {perk.description}
                </p>
              </div>
              <div className="h-48">
                <img
                  src={perk.image}
                  alt={perk.title}
                  className="w-full h-48 object-cover rounded-b-2xl bg-gray-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-8">
  <div className="w-full max-w-7xl px-4 sm:px-4 lg:px-8">
    <div className="flex flex-col lg:flex-row items-stretch gap-5">
      
      {/* Left Side - Image Card */}
      <div className="relative w-full lg:w-1/2 h-64 sm:h-72 rounded-2xl overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          src="https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/dailyGrocery.png"
          alt="Daily Grocery"
        />
        <div className="absolute inset-0 flex flex-col p-4 sm:p-6 rounded-2xl">
          <h2 className="w-40 sm:w-48 text-black text-lg sm:text-xl font-bold text-left pt-2 sm:pt-4">
            Shop your daily necessities
          </h2>
          <p className="w-60 sm:w-72 text-black text-sm mt-3 text-left pt-2 sm:pt-3">
            Shop from our popular category, Explore special offers and receive
            grocery on your doorsteps within 1 hour.
          </p>
          <button className="w-36 sm:w-40 mt-6 sm:mt-10 bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold text-sm sm:text-base">
            Start Shopping
          </button>
        </div>
      </div>

      {/* Right Side - YouTube Video */}
      <div className="w-full lg:w-1/2 h-64 sm:h-72 rounded-2xl overflow-hidden">
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/GT0d3lCpZWg?si=QUUGDuwHCwOdCIIV"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
      </div>

    </div>
  </div>
</div>
    </div>
  );
};

export default Shop;
