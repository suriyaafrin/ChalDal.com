import "./App.css";
export default function App() {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <div className="h-32 w-full border-2 border-black bg-gradient-to-r from-[#d9d0e6] to-[#cfc6dd] flex items-center">
        <div className="w-1/2 flex gap-10 p-5">
          <div className="flex justify-center items-center">
            <i className="fa-solid fa-bars text-2xl text-black"></i>
          </div>
          <img
            className="h-20 w-40"
            src="https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/components/header/Header/images/logo-small-v2.svg?q=best&webp=1"
            alt="logo"
          />
          <div className="h-20 w-30 flex justify-center items-center p-5 gap-3">
            <i className="fa-solid fa-location-dot"></i>
            <p className="text-purple-500">Dhaka</p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>

        <div className="w-1/2 flex justify-end items-center p-5">
          <button className="h-12 w-30 bg-purple-500 text-white rounded">
            Login
          </button>
        </div>
      </div>
      <div className="h-70 w-full border-2 border-black bg-gradient-to-r from-[#d9d0e6] to-[#cfc6dd] flex items-center">
          <div className="w-1/2 flex justify-end items-center flex-col gap-10 p-5">
            <p className="text-3xl font-bold text-black text-left p-5">Grocery Delivered at your Doorstep</p>
            <div className="relative w-64">
              <i class="fas fa-search absolute -right-9/12 top-8 -translate-y-1/2 text-gray-500 text-2xl"></i>
              <input className="h-15 w-120 border-2 border-black p-5 placeholder-gray-500 bg-white" placeholder="Search for products(e.g. eggs,milk,potato)" />
            </div>
          </div>
      </div>
    </>
  );
}
