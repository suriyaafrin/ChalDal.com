import React from "react";
import { warehouses } from "../../data/data.js";

const Warehouse = () => {
  return (
    <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mx-4 sm:mx-8 lg:mx-16">
      {warehouses.map((item) => (
        <div
          key={item.id}
          className="flex items-center bg-gray-100 rounded-2xl border border-gray-100 overflow-hidden"
        >
          <div className="flex-1 px-4 py-3 min-w-0">
            <p className="text-base font-semibold text-gray-900 mb-1 truncate">
              {item.title}
            </p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>

          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-cover shrink-0 bg-gray-50"
          />
        </div>
      ))}
    </div>
  );
};

export default Warehouse;
