import { useState } from "react";
import "./App.css";
const products = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/fruitsAndVegs.png?q=low&webp=1",
  },
  {
    id: 2,
    name: "Meat & Fish",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/meatAndFish.png?q=low&webp=1",
  },
  {
    id: 3,
    name: "Cooking",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/cooking.png?q=low&webp=1",
  },
  {
    id: 4,
    name: "Beverages",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beverages.png?q=low&webp=1",
  },
  {
    id: 5,
    name: "Home & Cleaning",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/home-cleaning.png?q=low&webp=1",
  },
  {
    id: 6,
    name: "Pest Control",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/pest-control.png?q=low&webp=1",
  },
  {
    id: 7,
    name: "Stationery & Office",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/stationary.png?q=low&webp=1",
  },
  {
    id: 8,
    name: "Beauty Products",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beauty.png?q=low&webp=1",
  },
  {
    id: 9,
    name: "Health Products",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/healthCare.png?q=low&webp=1",
  },
  {
    id: 10,
    name: "Pet Care",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/petFood.png?q=low&webp=1",
  },
  {
    id: 11,
    name: "Kitchen Appliances",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/kitchen-appliances.png?q=low&webp=1",
  },
  {
    id: 12,
    name: "Baby Care",
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/baby-care.png?q=low&webp=1",
  },
];
const brands = [
  {
    
    logo: "https://images.seeklogo.com/logo-png/45/2/pran-logo-png_seeklogo-455206.png",
  },
  {
    
    logo: "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/reckitt.png?q=low&webp=1",
  },
  {
    
    logo: "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/nestle.png?q=low&webp=1",
  },
  {
    
    logo: "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/uniliver.png?q=low&webp=1",
  },
  {
    
    logo: "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/godrej-seeklogo.png?q=low&webp=1",
  },
  {
    
    logo: "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/coca-cola.png?q=low&webp=1",
  },
  {
    
    logo: "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/fresh.png?q=low&webp=1",
  },
  {
    
    logo: "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/reckitt.png?q=low&webp=1",
  },
];

const perks = [
  {
    id: 1,
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/image.jpg?q=low&webp=1",
    title: "Shop & Earn Points",
    description:
      "The more you shop the more you earn - cash back, free shipping, exclusive offers and more. Discover the perks of Egg Club membership.",
  },
  {
    id: 2,
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/dailyDealsShopInfo.jpg?q=low&webp=1",
    title: "Deal of the Day",
    description:
      "Stock up on your favorite groceries for less with our unbeatable deals! Don't miss out - limited stock",
  },
  {
    id: 3,
    image:
      "https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/premiumImage.jpg?q=low&webp=1",
    title: "Premium Care",
    description:
      "Too busy to place an order or handling order issues no need to worry as we give you option to take premium assistance",
  },
];
const warehouses = [
  {
    id: 1,
    image:
      "https://png.pngtree.com/png-clipart/20200225/original/pngtree-house-vector-illustration-isolated-on-white-background-house-cartoon-house-clip-png-image_5261981.jpg",
    title: "26 warehouses",
    description: "all over bangladesh",
  },
  {
    id: 2,
    image:
      "https://img3.stockfresh.com/files/r/rastudio/m/14/8991282_stock-vector-woman-checking-shopping-list-in-the-grocery-store.jpg",
    title: "5 million orders",
    description: "have been delivered",
  },
  {
    id: 3,
    image:
      "data:image/jpeg;base64,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",
    title: "100,000 families",
    description: "are being served",
  },
  {
    id: 4,
    image:
      "data:image/png;base64,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",
    title: "340 million Taka",
    description: "customer savings",
  },
];
const divisions = ["Dhaka", "Chittagong", "Jessore"];

const CARDS_PER_PAGE = 5;
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const canPrev = index > 0;
  const canNext = index + CARDS_PER_PAGE < products.length;

  const sliced = products.slice(index, index + CARDS_PER_PAGE);
  const visible =
    sliced.length < CARDS_PER_PAGE
      ? [...sliced, ...products.slice(0, CARDS_PER_PAGE - sliced.length)]
      : sliced;

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
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

        <div className="h-20 w-full border-b border-purple-400 bg-gradient-to-r from-[#d9d0e6] to-[#cfc6dd] flex items-center justify-between px-6 sticky top-0 z-30">
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
              <select className="text-purple-500 border-none outline-none bg-transparent cursor-pointer font-medium">
                <option className="bg-purple-300 hover:bg-purple-200">
                  Dhaka
                </option>
                <option className="bg-purple-300">
                  Use my current location
                </option>
                <option className="bg-purple-300">Change City</option>
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
      <div className="w-full bg-gradient-to-r from-[#d9d0e6] to-[#cfc6dd] flex flex-col md:flex-row items-center px-6 md:px-10 py-10 md:py-0 md:h-80 lg:h-90 overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10 items-start">
          <p className="text-2xl sm:text-3xl font-bold text-black text-left leading-snug">
            Grocery Delivered at your Doorstep
          </p>

          <div className="relative w-full">
            <input
              className="h-11 sm:h-12 w-full border border-gray-400 px-5 pr-12 placeholder-gray-400 bg-white rounded outline-none focus:border-purple-400 text-sm sm:text-base"
              placeholder="Search for products (e.g. eggs, milk, potato)"
            />
            <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg"></i>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-end mt-6 md:mt-0 md:self-end">
          <img
            className="h-48 sm:h-60 md:h-64 lg:h-72 w-auto object-contain"
            src="https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/imageBanner.png?q=low&webp=1"
            alt="grocery banner"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 p-4 sm:p-6 md:p-10 md:ml-10 lg:ml-20">
        <div className="h-14 sm:h-15 w-full border border-gray-300 rounded-2xl flex items-center gap-3 px-4 sm:px-5">
          <i className="fa-brands fa-product-hunt text-purple-500 text-lg flex-shrink-0"></i>
          <p className="text-sm sm:text-base">
            <b>+15000 products</b> to shop from
          </p>
        </div>

        <div className="h-14 sm:h-15 w-full border border-gray-300 rounded-2xl flex items-center gap-3 px-4 sm:px-5">
          <i className="fa-brands fa-paypal text-purple-500 text-lg flex-shrink-0"></i>
          <p className="text-sm sm:text-base">
            Pay <b>after</b> receiving products
          </p>
        </div>

        <div className="h-14 sm:h-15 w-full border border-gray-300 rounded-2xl flex items-center gap-3 px-4 sm:px-5">
          <i className="fa-solid fa-box text-purple-500 text-lg flex-shrink-0"></i>
          <p className="text-sm sm:text-base">
            Get your delivery within <b>1 hour</b>
          </p>
        </div>

        <div className="h-14 sm:h-15 w-full border border-gray-300 rounded-2xl flex items-center gap-3 px-4 sm:px-5">
          <i className="fa-regular fa-money-bill-1 text-purple-500 text-lg flex-shrink-0"></i>
          <p className="text-sm sm:text-base">
            Get offers that <b>Save Money</b>
          </p>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-gray-400 text-center ">
            Popular Categories
          </h2>

          <div className="flex items-center gap-3">
            <button className="text-purple-600 font-medium text-sm hover:underline">
              View All
            </button>

            <button
              onClick={() => setIndex((i) => i - CARDS_PER_PAGE)}
              disabled={!canPrev}
              className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ‹
            </button>

            <button
              onClick={() => setIndex((i) => i + CARDS_PER_PAGE)}
              disabled={!canNext}
              className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ›
            </button>
          </div>
        </div>

        <div className="flex items-stretch gap-4">
          {visible.map((category) => (
            <div
              key={category.id}
              className="flex-1 flex flex-col items-center justify-between border border-gray-200 rounded-2xl p-4 cursor-pointer hover:shadow-md hover:border-purple-300 transition-all"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-32 w-full object-contain"
              />
              <p className="text-sm text-gray-700 text-center mt-3">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-400 mb-5">
          Popular on Chaldal
        </h2>
        <div className="flex">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-5"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-100 h-30 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 sm:px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-400 mb-5">
          Shop & Get More
        </h2>

        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className="flex-1 flex flex-col gap-4 bg-gray-200 rounded-2xl overflow-hidden"
            >
              <h3 className="text-lg font-semibold text-gray-800 text-left px-5 pt-5">
                {perk.title}
              </h3>
              <p className="text-sm text-gray-500 text-left px-5">
                {perk.description}
              </p>
              <img
                src={perk.image}
                alt={perk.title}
                className="w-full h-48 object-cover rounded-b-2xl bg-gray-100"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-5 pt-8 px-0 sm:px-4 lg:px-6">
          <div className="relative w-full lg:w-1/2 h-64 sm:h-72 rounded-2xl overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              src="https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/dailyGrocery.png"
              alt="Daily Grocery"
            />
            <div className="absolute inset-0 flex flex-col p-4 sm:p-6 rounded-2xl">
              <h2 className="w-36 sm:w-40 text-black text-lg sm:text-xl font-bold text-left pt-2 sm:pt-4">
                Shop your daily necessities
              </h2>
              <p className="w-56 sm:w-72 text-black text-sm mt-2 text-left pt-2 sm:pt-3">
                Shop from our popular category, Explore special offers and
                receive grocery on your doorsteps within 1 hour.
              </p>
              <button className="w-36 sm:w-40 mt-6 sm:mt-10 bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold text-sm sm:text-base">
                Start Shopping
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-64 sm:h-72 rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/GT0d3lCpZWg?si=QUUGDuwHCwOdCIIV"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div className="w-full h-80  bg-purple-50 flex items-center justify-between">
        <div className="">
          <h2>Download The Chaldal App Now!</h2>
          <p className="p-5">
            Get <b>5% off</b> on your first order through the Chaldal app and
            make your shopping experience even smoother!
          </p>
          <div className="flex items-center justify-center p-10">
            <img
              className="h-10 w-30"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
            />
            <img
              className="h-10 w-30"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Play_Store_badge_FR.svg/3840px-Google_Play_Store_badge_FR.svg.png"
            />
          </div>
        </div>
        <div className="pt-13">
          <img src="https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/downloadApp.png?q=low&webp=1" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {warehouses.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-gray-100 rounded-2xl border border-gray-100 overflow-hidden"
          >
            <div className="flex-1 px-4 py-3 min-w-0">
              <p className="text-base font-semibold text-gray-900 mb-1 truncate">
                {item.title}
              </p>
              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>
            </div>

            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover flex-shrink-0 bg-gray-50"
            />
          </div>
        ))}
      </div>
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
    </>
  );
}
