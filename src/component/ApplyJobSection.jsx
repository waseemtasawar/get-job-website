import React from "react";
import ProfileImage from "../assets/show-right.png";

const ApplyJobSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 bg-cream shadow-md">
      {/* Left Section */}
      <div className="flex-1 mb-4 md:mb-0">
        <p className="text-xl text-textcolor mb-4">How it works</p>
        <h2 className="text-2xl font-bold ">Easy Step To Find and</h2>
        <h2 className="text-2xl font-bold mb-4">Apply Your Dream Job</h2>
        <p className="mb-8">
          We will help you to find your dream job easily, let us help you manage
          everything you need.
        </p>
        <ul className="bg-white rounded-lg divide-y divide-gray-200">
          <li className="p-4">
            <h3 className="font-semibold text-textcolor">
              Easy to upload Your Best CV and Portfolio
            </h3>
            <p>
              You can upload your resume, CV, and portfolio directly to Jobbb.
            </p>
          </li>
          <li className="p-4">
            <h3 className="font-semibold text-textcolor">
              You Will Be Notified With All Updates
            </h3>
            <p>
              Get notified about new job vacancies, scheduled interviews, and
              job applications.
            </p>
          </li>
          <li className="p-4">
            <h3 className="font-semibold text-textcolor">
              Apply for your dream job from the best company
            </h3>
            <p>
              We will provide recommendations for your choice companies from all
              over the world.
            </p>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={ProfileImage}
          alt="Profile"
          className="rounded-full"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default ApplyJobSection;
