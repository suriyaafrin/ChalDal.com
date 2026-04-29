import React from "react";

const Card = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 p-4 sm:p-6 md:p-10 md:ml-10 lg:ml-20">
      <div className="h-14 sm:h-15 w-full border border-gray-300 rounded-2xl flex items-center gap-3 px-4 sm:px-5">
        <i className="fa-brands fa-product-hunt text-purple-500 text-lg shrink-0"></i>
        <p className="text-sm sm:text-base">
          <b>+15000 products</b> to shop from
        </p>
      </div>

      <div className="h-14 sm:h-15 w-full border border-gray-300 rounded-2xl flex items-center gap-3 px-4 sm:px-5">
        <i className="fa-brands fa-paypal text-purple-500 text-lg shrink-0"></i>
        <p className="text-sm sm:text-base">
          Pay <b>after</b> receiving products
        </p>
      </div>

      <div className="h-14 sm:h-15 w-full border border-gray-300 rounded-2xl flex items-center gap-3 px-4 sm:px-5">
        <i className="fa-solid fa-box text-purple-500 text-lg shrink-0"></i>
        <p className="text-sm sm:text-base">
          Get your delivery within <b>1 hour</b>
        </p>
      </div>

      <div className="h-14 sm:h-15 w-full border border-gray-300 rounded-2xl flex items-center gap-3 px-4 sm:px-5">
        <i className="fa-regular fa-money-bill-1 text-purple-500 text-lg shrink-0"></i>
        <p className="text-sm sm:text-base">
          Get offers that <b>Save Money</b>
        </p>
      </div>
    </div>
  );
};

export default Card;
