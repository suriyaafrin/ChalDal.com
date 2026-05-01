import React, { useState } from "react";
import { stores } from "../../data/data.js";

function SideBar({ isOpen, onClose }) {
  const [selectedStore, setSelectedStore] = useState(null);
  const handleStoreClick = (storeId) => {
    setSelectedStore(storeId);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 transition-opacity duration-300 z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b border-purple-400">
          <i
            className="fa-solid fa-xmark text-2xl cursor-pointer hover:text-purple-600 transition-colors"
            onClick={onClose}
          />
        </div>

        <div className="px-6 py-6">
          <div className="flex gap-3 ">
            {stores.map((store) => (
              <div
                key={store.id}
                onClick={() => handleStoreClick(store.id)}
                className={`flex flex-col items-center cursor-pointer transition-all duration-200 p-2 rounded-xl
                  ${
                    selectedStore === store.id
                      ? "border-2 border-purple-600 bg-purple-50 shadow-md"
                      : "hover:scale-105 hover:border border-transparent"
                  }`}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-2 ">
                  <img
                    src={store.img}
                    alt={store.name}
                    className="w-8 h-9 object-contain"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-700 text-center">
                  {store.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-20 p-3 w-full border-2 border-purple-600 bg-yellow-200">
          <div className="">
            <p className=" text-sm">Egg Club</p>
            <h3 className="font-bold text-x whitespace-nowrap">0 Points</h3>
          </div>
          <div>
            <button className="h-10 w-30 mt-5 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap">
              Get Discounts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
