import React from "react";
import { brands } from "../../data/data.js";

const Brand = () => {
  return (
    <div>
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-400  mb-5">
          Popular on Chaldal
        </h2>
        <div className="flex">
          {brands.map((brand) => (
            <div className="flex items-center justify-center p-5">
              <img
                src={brand.logo}
                className="w-100 h-30 object-contain"
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
