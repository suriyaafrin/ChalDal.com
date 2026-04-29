
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <input
        className="h-11 sm:h-12 w-full border border-gray-400 px-5 pr-12 
                   placeholder-gray-400 bg-white rounded outline-none 
                   focus:border-purple-400 text-sm sm:text-base"
        placeholder="Search for products (e.g. eggs, milk, potato)"
      />
      <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg"></i>
    </div>
  );
};

export default SearchBar;