import React from "react";
import InterViewImage from "../assets/show-left.png";

const ProfileComponent = () => {
  return (
    <div className="bg-cream p-4 md:p-8 shadow-md rounded-lg flex flex-col md:flex-row items-center justify-between">
      {/* Image Container */}
      <div className="flex-1 flex justify-center mb-4 md:mb-0">
        <img
          src={InterViewImage}
          alt="Profile Image"
          className="rounded-full max-w-full h-auto" // Responsive image handling
          style={{ maxWidth: "90%", maxHeight: "500px" }}
        />
      </div>

      {/* Text and Button Container */}
      <div className="flex-1">
        <p className="text-lg md:text-xl font-bold text-textcolor mb-2 md:mb-6">
          Create Profile
        </p>
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
          Build Your Personal Account Profile
        </h2>
        <p className="mb-4 md:mb-6">
          Create an account for the job information you want, get daily
          notifications and you can easily apply directly to the company you
          want and create an account now for free.
        </p>
        <button className="bg-textcolor text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default ProfileComponent;
