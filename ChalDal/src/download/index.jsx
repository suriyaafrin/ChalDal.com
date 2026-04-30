import React from "react";

const Download = () => {
  return (
    <div className="w-full h-95 bg-purple-50 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16">
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Download The Chaldal App Now!
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto sm:mx-0">
              Get <b>5% off</b> on your first order through the Chaldal app and
              make your shopping experience even smoother!
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
              <img
                className="h-10 sm:h-12 w-auto cursor-pointer hover:scale-105 transition-transform"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                alt="Download on App Store"
              />
              <img
                className="h-10 sm:h-12 w-auto cursor-pointer hover:scale-105 transition-transform"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Play_Store_badge_FR.svg/3840px-Google_Play_Store_badge_FR.svg.png"
                alt="Get it on Google Play"
              />
            </div>
          </div>

          <div className="shrink-0 flex justify-center">
            <img
              src="https://chaldn.com/asset/egg-chaldal-web-release-id-29454/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/downloadApp.png?q=low&webp=1"
              alt="Chaldal App"
              className="h-64 sm:h-72 pt-10 lg:h-80 w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
