import React, { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end px-5 py-5 border-b border-purple-100">
          <i
            className="fa-solid fa-xmark text-xl text-gray-500 cursor-pointer hover:text-purple-500"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      </div>

      <div className="h-20 w-full border-b border-purple-400 bg-linear-to-r from-[#d9d0e6] to-[#cfc6dd] flex items-center justify-between px-6 sticky top-0 z-30">
        <div className="flex items-center gap-15">
          <i
            className="fa-solid fa-bars text-2xl text-black cursor-pointer hover:text-purple-600 transition-colors"
            onClick={() => setSidebarOpen(true)}
          />

          <img
            className="h-12 w-32 object-contain"
            src="https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/components/header/Header/images/logo-small-v2.svg?q=best&webp=1"
            alt="logo"
          />

          <div className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-purple-500"></i>
            <select className="text-purple-500  border-none outline-none bg-transparent cursor-pointer font-medium">
              <option className="bg-white  hover:bg-purple-200">Dhaka</option>
              <option className="bg-white">Use my current location</option>
              <option className="bg-white">Change City</option>
            </select>
          </div>
        </div>

        <div>
          <button className="h-10 px-6 bg-purple-500 text-white rounded cursor-pointer hover:bg-purple-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
