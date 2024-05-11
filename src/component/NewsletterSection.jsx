import React from "react";
import BellIcon from "../assets/bell.png";
import BackgroundPattern from "../assets/backgroud-1.png";

const NewsletterSection = () => {
  return (
    <div className="bg-cream relative w-full p-4 sm:p-8 mx-auto flex items-center">
      <div
        className="relative w-full mx-auto my-4 bg-textcolor flex items-center shadow-md rounded-[50px]"
        style={{ height: "auto", minHeight: "250px", width: "95%" }}
      >
        {/* Left side with Bell Icon and text */}
        <div
          className="flex-1 flex justify-center items-center"
          style={{
            backgroundImage: `url(${BellIcon})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
          }}
        >
          <div className="text-left pl-8 py-4 pr-2">
            <h2 className="text-xl font-bold text-white">
              Never Want to Miss Any Job News?
            </h2>
          </div>
        </div>

        {/* Right side with Pattern and subscription form */}
        <div
          className="flex-1 flex justify-center items-center"
          style={{
            backgroundImage: `url(${BackgroundPattern})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          <div className="flex w-full max-w-xs md:max-w-md bg-white rounded-full p-2">
            <input
              type="email"
              placeholder="Enter your email address here..."
              className="flex-grow outline-none pl-3 py-2 rounded-l-full text-gray-700"
            />
            <button className="bg-textcolor text-white px-4 py-2 rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
