import React from "react";
import { brands } from "../../data/data.js";

const Brand = () => {
  return (
    <div>
  <div className="px-6 py-4">
    <h2 className="text-2xl font-semibold text-gray-400 mb-5 text-center ">
      Popular on Chaldal
    </h2>

    <div className="flex  justify-center gap-4 sm:gap-6 px-4">
  {brands.map((brand, index) => (
    <div
      key={index}
      className="flex items-center justify-center p-3 sm:p-5"
    >
      <img
        src={brand.logo}
        alt={brand.name || "Brand logo"}
        className="w-16 h-14 sm:w-24 md:w-28 h-16 sm:h-20 object-contain"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </div>
  ))}
</div>
  </div>
</div>
  );
};

export default Brand;
