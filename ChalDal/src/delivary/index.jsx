import React from "react";
import { divisions } from "../../data/data.js";

const Delivery = () => {
  return (
    <div>
      <div className="relative w-full mt-15">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/234/456/small/a-man-drives-a-scooter-motorbike-for-delivery-business.jpg"
          className="w-full h-70 object-cover opacity-40"
        />

        <div className="absolute inset-0 z-10 flex flex-wrap items-center justify-center gap-4 p-10">
          {divisions.map((division) => (
            <button
              key={division}
              className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold text-base tracking-wide shadow-md shadow-purple-400 w-70 h-13"
            >
              {division}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
