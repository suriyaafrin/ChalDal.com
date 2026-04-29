import React from "react";

const Download = () => {
  return (
    <div className="w-full h-80  bg-purple-50 flex items-center justify-between">
      <div className="">
        <h2>Download The Chaldal App Now!</h2>
        <p className="p-5">
          Get <b>5% off</b> on your first order through the Chaldal app and make
          your shopping experience even smoother!
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
  );
};

export default Download;
