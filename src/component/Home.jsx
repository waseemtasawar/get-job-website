import React from "react";
import Imagehero from "../assets/Image-herro.png";
import SreachImage from "../assets/search.png";
import LocatioImage from "../assets/location.png";

const Home = () => {
  return (
    <div className="bg-cream p-4 md:p-5 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="space-y-4 w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Find the job of
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-textcolor">
          your Dreams
        </h1>
        <article>
          <p className="text-sm md:text-base mb-4 md:mb-8">
            Find Your New Job Today! New Job Postings Everyday just for you,
            browse the job you want and apply wherever you want.
          </p>
        </article>

        <div className="flex flex-wrap gap-2">
          <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full">
            Web Designer
          </span>
          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
            UI/UX Designer
          </span>
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
            Frontend
          </span>
        </div>

        {/* Responsive Search Section */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-center bg-white p-2 rounded-full">
          <div className="flex flex-1 bg-transparent rounded-full">
            <img
              src={SreachImage}
              alt="Job Icon"
              className="w-6 h-6 ml-2 my-auto"
            />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 bg-transparent outline-none pl-1 pr-3 py-1"
            />
          </div>
          <div className="flex flex-1 bg-transparent rounded-full">
            <img
              src={LocatioImage}
              alt="Location Icon"
              className="w-6 h-6 ml-2 my-auto"
            />
            <input
              type="text"
              placeholder="Bandung, Indonesia"
              className="flex-1 bg-transparent outline-none pl-1 pr-3 py-1"
            />
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full">
            Search
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
        <img
          src={Imagehero}
          alt="Job Search"
          className="rounded-full"
          style={{ maxWidth: "90%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Home;
