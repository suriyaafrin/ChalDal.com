import React, { useState, useEffect } from "react";
import SearchBar from "../searchBar/index.jsx";
import SideBar from "../sideBar/index.jsx";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <nav
        className="h-20 border-b border-purple-400 bg-linear-to-r from-[#d9d0e6] to-[#cfc6dd]
                      flex items-center px-6 sticky top-0 z-30 shadow-sm"
      >
        <div className="flex items-center justify-between w-full mx-auto">
          <div className="flex items-center gap-8 flex-1">
            <i
              className="fa-solid fa-bars text-2xl text-black cursor-pointer hover:text-purple-600 transition-colors"
              onClick={() => setSidebarOpen(true)}
            />
            <img
              className="h-12 w-32 object-contain"
              src="https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/components/header/Header/images/logo-small-v2.svg?q=best&webp=1"
              alt="Chaldal Logo"
            />
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-purple-500"></i>
              <select className="text-purple-500 border-none outline-none bg-transparent cursor-pointer font-medium">
                <option>Dhaka</option>
                <option>Use my current location</option>
                <option>Change City</option>
              </select>
            </div>
          </div>

          <div
            className={`flex-1 max-w-xl mx-8 transition-all duration-300 ${
              scrolled ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="relative w-full">
              <SearchBar />
            </div>
          </div>

          <button className="h-10 px-6 bg-purple-500 text-white rounded font-medium hover:bg-purple-600 transition-colors ml-auto">
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;