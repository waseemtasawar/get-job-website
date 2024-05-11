import React from "react";

// Import logos
import Slack from "../assets/slack.png";
import Microsoft from "../assets/mircosoft.png"; // Corrected the spelling of 'Microsoft'
import Google from "../assets/google.png";
import Airbnb from "../assets/Airbnb_Logo.png";

const Companies = () => {
  return (
    <div className="bg-white p-7">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Join most well known{" "}
        <span className="font-bold text-textcolor">companies</span> around the
        world
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:justify-between items-center">
        <img src={Slack} alt="Slack" className="w-16 md:w-24" />
        <img src={Microsoft} alt="Microsoft" className="w-16 md:w-24" />
        <img src={Google} alt="Google" className="w-16 md:w-24" />
        <img src={Airbnb} alt="Airbnb" className="w-16 md:w-24" />
      </div>
    </div>
  );
};

export default Companies;
